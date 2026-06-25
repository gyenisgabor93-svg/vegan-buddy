package com.example.eluvegancircle

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.graphics.Color
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.OnBackPressedCallback
import androidx.compose.runtime.Composable
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import com.example.eluvegancircle.ui.theme.EluVeganCircleTheme
import com.google.android.gms.location.LocationServices
import android.webkit.WebChromeClient
import android.webkit.ValueCallback
import android.net.Uri
import android.content.Intent
import android.webkit.WebSettings
import androidx.activity.result.ActivityResultLauncher
import androidx.compose.runtime.remember
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.platform.LocalContext

class MainActivity : ComponentActivity() {

    private var filePathCallback: ValueCallback<Array<Uri>>? = null

    private val filePickerLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->

            val callback = filePathCallback
            filePathCallback = null

            if (callback == null) return@registerForActivityResult

            val data = result.data
            val uris = mutableListOf<Uri>()

            // 🔥 SAFER extraction (not only parseResult)
            if (data?.clipData != null) {
                val clipData = data.clipData!!
                for (i in 0 until clipData.itemCount) {
                    uris.add(clipData.getItemAt(i).uri)
                }
            } else if (data?.data != null) {
                uris.add(data.data!!)
            }

            if (uris.isEmpty()) {
                callback.onReceiveValue(null)
                return@registerForActivityResult
            }

            // 🔥 Convert URIs into Web-safe accessible ones
            val safeUris = uris.mapNotNull { uri ->
                try {
                    contentResolver.takePersistableUriPermission(
                        uri,
                        Intent.FLAG_GRANT_READ_URI_PERMISSION
                    )
                    uri
                } catch (e: Exception) {
                    uri
                }
            }.toTypedArray()

            callback.onReceiveValue(safeUris)
        }

    private var webView: WebView? = null

    // 🔥 Permission launcher
    private val requestPermissionLauncher =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) { isGranted ->
            if (isGranted) {
                sendLocationToWeb()
            }
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        enableEdgeToEdge()
        WindowCompat.setDecorFitsSystemWindows(window, false)

        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
            window.isNavigationBarContrastEnforced = false
        }

        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.isAppearanceLightStatusBars = true
        controller.isAppearanceLightNavigationBars = true

        setContent {
            EluVeganCircleTheme {
                WebViewScreen(
                    onWebViewCreated = { wv ->
                        webView = wv

                        // Back handler
                        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
                            override fun handleOnBackPressed() {

                                val currentWebView = wv

                                if (currentWebView.canGoBack()) {
                                    currentWebView.goBack()
                                    return
                                }

                                // optional JS hook
                                currentWebView.evaluateJavascript(
                                    "typeof handleBackButton === 'function' && handleBackButton();",
                                    null
                                )

                                // if you want to PREVENT closing app entirely:
                                // do nothing here

                                // OR if you want fallback close:
                                // isEnabled = false
                                // onBackPressedDispatcher.onBackPressed()
                            }
                        })

                        // 🔥 Request location after WebView is ready
                        requestLocationPermission()
                    },
                    filePickerLauncher = filePickerLauncher,
                    setFileCallback = { callback ->
                        filePathCallback = callback
                    }
                )
            }
        }
    }

    // ✅ Ask permission
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

    // ✅ Get location and send to WebView
    @SuppressLint("MissingPermission")
    private fun sendLocationToWeb() {
        val fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

        fusedLocationClient.lastLocation.addOnSuccessListener { location ->
            location?.let {
                val lat = it.latitude
                val lng = it.longitude

                webView?.evaluateJavascript(
                    "window.onLocationReceived($lat, $lng);",
                    null
                )
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WebViewScreen(
    onWebViewCreated: (WebView) -> Unit,
    filePickerLauncher: ActivityResultLauncher<Intent>,
    setFileCallback: (ValueCallback<Array<Uri>>?) -> Unit
) {
    val context = LocalContext.current

    val webView = remember {
        WebView(context).apply {

            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )

            setBackgroundColor(Color.WHITE)

            webViewClient = WebViewClient()

            webChromeClient = object : WebChromeClient() {
                override fun onShowFileChooser(
                    webView: WebView?,
                    filePathCallback: ValueCallback<Array<Uri>>?,
                    fileChooserParams: FileChooserParams?
                ): Boolean {
                    setFileCallback(filePathCallback)

                    return try {
                        val intent = fileChooserParams?.createIntent()
                        intent?.type = "*/*"
                        intent?.addCategory(Intent.CATEGORY_OPENABLE)

                        filePickerLauncher.launch(intent!!)
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
                allowFileAccessFromFileURLs = true
                allowUniversalAccessFromFileURLs = true
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            }

            loadUrl("https://vegan-buddy.vercel.app/Connections/ConnectionsWebApp/index.html")
        }
    }

    AndroidView(
        factory = { webView },
        update = {
            // DO NOTHING → prevents reload
        }
    )

    LaunchedEffect(Unit) {
        onWebViewCreated(webView)
    }
}