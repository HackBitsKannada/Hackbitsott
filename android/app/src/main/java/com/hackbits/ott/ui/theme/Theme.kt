package com.hackbits.ott.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable

// Dark theme is the default and only scheme for the OTT experience.
private val HackbitsColors = darkColorScheme(
    primary = HbPrimary,
    secondary = HbSecondary,
    background = HbBackground,
    surface = HbSurface,
    surfaceVariant = HbCard,
    onPrimary = HbText,
    onBackground = HbText,
    onSurface = HbText,
    onSurfaceVariant = HbTextMuted,
)

@Composable
fun HackbitsTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = HackbitsColors, content = content)
}
