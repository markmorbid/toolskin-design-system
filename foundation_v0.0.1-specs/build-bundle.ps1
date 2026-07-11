# Toolskin Bundle Builder
# This script downloads external dependencies and creates a single bundled file
# No Node.js required!

Write-Host "🎨 Toolskin Bundle Builder v2.0" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Configuration
$LenisURL = "https://unpkg.com/lenis@1.3.18/dist/lenis.min.js"
$LocomotiveURL = "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"
$OutputFile = "toolskin.bundle.js"
$TempDir = "temp_bundle"

# Create temp directory
if (!(Test-Path $TempDir)) {
    New-Item -ItemType Directory -Path $TempDir | Out-Null
}

Write-Host "📥 Downloading dependencies..." -ForegroundColor Yellow

# Download Lenis
try {
    Invoke-WebRequest -Uri $LenisURL -OutFile "$TempDir\lenis.min.js"
    Write-Host "  ✓ Lenis downloaded" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to download Lenis: $_" -ForegroundColor Red
    exit 1
}

# Download Locomotive
try {
    Invoke-WebRequest -Uri $LocomotiveURL -OutFile "$TempDir\locomotive.min.js"
    Write-Host "  ✓ Locomotive Scroll downloaded" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to download Locomotive: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔨 Building bundle..." -ForegroundColor Yellow

# Create the bundle
$BundleContent = @"
/*!
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  TOOLSKIN BUNDLE  ·  v2.0.0  ·  All-in-One Version             ║
 * ║  Includes: Lenis + Locomotive Scroll + Toolskin Framework       ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * This bundle includes all external dependencies inline.
 * Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   LENIS SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════════ */

$(Get-Content "$TempDir\lenis.min.js" -Raw)

/* ═══════════════════════════════════════════════════════════════════
   LOCOMOTIVE SCROLL
   ═══════════════════════════════════════════════════════════════════ */

$(Get-Content "$TempDir\locomotive.min.js" -Raw)

/* ═══════════════════════════════════════════════════════════════════
   TOOLSKIN FRAMEWORK
   ═══════════════════════════════════════════════════════════════════ */

$(Get-Content "toolskin.js" -Raw)

/* ═══════════════════════════════════════════════════════════════════
   BUNDLE READY
   ═══════════════════════════════════════════════════════════════════ */

console.log('✓ Toolskin Bundle v2.0.0 loaded (all dependencies included)');
"@

# Write bundle
$BundleContent | Out-File -FilePath $OutputFile -Encoding UTF8

# Cleanup
Remove-Item -Recurse -Force $TempDir

# Get file size
$FileSize = (Get-Item $OutputFile).Length / 1KB

Write-Host "  ✓ Bundle created: $OutputFile" -ForegroundColor Green
Write-Host "  ✓ Size: $([math]::Round($FileSize, 2)) KB" -ForegroundColor Green
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "🎉 Build complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Usage in HTML:" -ForegroundColor Cyan
Write-Host '  <script src="toolskin.bundle.js"></script>' -ForegroundColor White
Write-Host ""
