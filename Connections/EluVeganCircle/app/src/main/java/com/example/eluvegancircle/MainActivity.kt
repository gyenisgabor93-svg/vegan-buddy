package com.example.eluvegancircle

import android.Manifest
import android.annotation.SuppressLint
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Color
import android.net.Uri
import android.os.Bundle
import android.webkit.*
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.*
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.core.view.WindowCompat
import com.example.eluvegancircle.ui.theme.EluVeganCircleTheme
import com.google.android.gms.location.LocationServices
import android.os.Build

class MainActivity : ComponentActivity() {

    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private var webView: WebView? = null

    private var isPageReady = false

    private val filePickerLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->

            val callback = filePathCallback
            filePathCallback = null

            if (callback == null) return@registerForActivityResult

            val data = result.data
            val uris = mutableListOf<Uri>()

            if (data?.clipData != null) {
                val clip = data.clipData!!
                for (i in 0 until clip.itemCount) {
                    uris.add(clip.getItemAt(i).uri)
                }
            } else if (data?.data != null) {
                uris.add(data.data!!)
            }

            if (uris.isEmpty()) {
                callback.onReceiveValue(null)
                return@registerForActivityResult
            }

            callback.onReceiveValue(uris.toTypedArray())
        }

    private val requestPermissionLauncher =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) { granted ->
            if (granted) sendLocationToWeb()
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        enableEdgeToEdge()
        WindowCompat.setDecorFitsSystemWindows(window, false)

        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            window.isNavigationBarContrastEnforced = false
        }

        setContent {
            EluVeganCircleTheme {
                WebViewScreen(
                    onWebViewCreated = { wv ->
                        webView = wv
                        setupBackHandling(wv)
                    },
                    onPageReady = {
                        isPageReady = true
                        requestLocationPermission()
                    },
                    filePickerLauncher = filePickerLauncher,
                    setFileCallback = { filePathCallback = it }
                )
            }
        }
    }

    // ✅ SAFE BACK HANDLING (no duplicates, stable JS fallback)
    private fun setupBackHandling(wv: WebView) {
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {

                if (wv.canGoBack()) {
                    wv.goBack()
                    return
                }

                wv.evaluateJavascript(
                    """
                    (function(){
                        if (typeof window.handleBackButton === "function") {
                            window.handleBackButton();
                        }
                    })();
                    """.trimIndent(),
                    null
                )
            }
        })
    }

    private fun requestLocationPermission() {
        when {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED -> {
                sendLocationToWeb()
            }

            else -> {
                requestPermissionLauncher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
            }
        }
    }

    // ✅ FIXED: ONLY RUN AFTER PAGE IS READY
    @SuppressLint("MissingPermission")
    private fun sendLocationToWeb() {

        if (!isPageReady) return

        val fused = LocationServices.getFusedLocationProviderClient(this)

        fused.lastLocation.addOnSuccessListener { location ->
            location ?: return@addOnSuccessListener

            val lat = location.latitude
            val lng = location.longitude

            webView?.evaluateJavascript(
                """
                (function () {
                    // SAFE BRIDGE (prevents overwrite issues)
                    window.__nativeLocation = { lat: $lat, lng: $lng };

                    if (typeof window.onLocationReceived === "function") {
                        window.onLocationReceived($lat, $lng);
                    }

                    console.log("Location sent:", $lat, $lng);
                })();
                """.trimIndent(),
                null
            )
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WebViewScreen(
    onWebViewCreated: (WebView) -> Unit,
    onPageReady: () -> Unit,
    filePickerLauncher: ActivityResultLauncher<Intent>,
    setFileCallback: (ValueCallback<Array<Uri>>?) -> Unit
) {

    val context = LocalContext.current

    val webView = remember {
        WebView(context).apply {

            layoutParams = android.view.ViewGroup.LayoutParams(
                android.view.ViewGroup.LayoutParams.MATCH_PARENT,
                android.view.ViewGroup.LayoutParams.MATCH_PARENT
            )

            setBackgroundColor(Color.WHITE)

            webViewClient = object : WebViewClient() {

                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)

                    // ✅ CRITICAL FIX: JS is ONLY safe AFTER this point
                    evaluateJavascript(
                        """
                        (function(){
                            window.__WEBVIEW_READY__ = true;

                            // Optional hook your JS can use
                            if (typeof window.onWebViewReady === "function") {
                                window.onWebViewReady();
                            }
                        })();
                        """.trimIndent(),
                        null
                    )

                    (context as? MainActivity)?.runOnUiThread {
                        onPageReady()
                    }
                }
            }

            webChromeClient = object : WebChromeClient() {

                override fun onShowFileChooser(
                    webView: WebView?,
                    filePathCallback: ValueCallback<Array<Uri>>?,
                    fileChooserParams: FileChooserParams?
                ): Boolean {

                    setFileCallback(filePathCallback)

                    return try {
                        val intent = fileChooserParams?.createIntent()
                            ?: return false

                        intent.type = "*/*"
                        intent.addCategory(Intent.CATEGORY_OPENABLE)

                        filePickerLauncher.launch(intent)
                        true

                    } catch (e: Exception) {
                        setFileCallback(null)
                        false
                    }
                }
            }

            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                allowFileAccess = true
                allowContentAccess = true
                useWideViewPort = true
                loadWithOverviewMode = true
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            }

            loadUrl("https://vegan-buddy.vercel.app/Connections/ConnectionsWebApp/index.html")
        }
    }

    AndroidView(
        factory = { webView },
        update = {
            // ❌ IMPORTANT: DO NOT TOUCH (prevents reloads)
        }
    )

    LaunchedEffect(Unit) {
        onWebViewCreated(webView)
    }
}