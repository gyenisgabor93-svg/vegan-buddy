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

class MainActivity : ComponentActivity() {

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
                                wv.evaluateJavascript(
                                    "typeof handleBackButton === 'function' && handleBackButton();",
                                    null
                                )
                            }
                        })

                        // 🔥 Request location after WebView is ready
                        requestLocationPermission()
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
fun WebViewScreen(onWebViewCreated: (WebView) -> Unit) {

    AndroidView(
        factory = { context ->

            WebView(context).apply {

                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )

                setBackgroundColor(Color.WHITE)

                webViewClient = WebViewClient()

                webChromeClient = object : android.webkit.WebChromeClient() {
                    override fun onShowFileChooser(
                        webView: WebView?,
                        filePathCallback: android.webkit.ValueCallback<Array<android.net.Uri>>?,
                        fileChooserParams: FileChooserParams?
                    ): Boolean {
                        return super.onShowFileChooser(webView, filePathCallback, fileChooserParams)
                    }
                }
                
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    loadWithOverviewMode = true
                    useWideViewPort = true
                }

                loadUrl("https://vegan-buddy.vercel.app/Connections/ConnectionsWebApp/index.html")

                onWebViewCreated(this)
            }
        }
    )
}