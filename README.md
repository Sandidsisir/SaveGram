<div align="center">
  <img src="src/icons/savegram.svg" width="96" height="96" alt="SaveGram Logo" />
  <h1>SaveGram</h1>
  <p><strong>Fast, reliable Chrome / Chromium Manifest V3 extension for downloading high-resolution photos, videos, carousels, Stories, and Reels from Instagram.</strong></p>
  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/latest"><img src="https://img.shields.io/github/v/release/Sandidsisir/SaveGram?color=success" alt="Latest Release" /></a>
    <img src="https://img.shields.io/badge/Manifest-V3-blue" alt="Manifest V3" />
    <img src="https://img.shields.io/badge/Version-5.3.4-success" alt="Version 5.3.4" />
    <img src="https://img.shields.io/badge/License-MIT-lightgrey" alt="License: MIT" />
  </p>
  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/latest">
      <img src="https://img.shields.io/badge/📥_Download-Latest_Extension_(.ZIP)-2ea44f?style=for-the-badge" alt="Download SaveGram" />
    </a>
  </p>
</div>

---

## ✨ Features

- **Single & Bulk Post Downloads**: Download individual photos, videos, or entire multi-slide carousels directly from your feed, profile grids, saved posts, and explore pages.
- **Mass Account / Profile Downloader**: Scan and bulk-download posts from any profile with customizable filters (`All`, `Top K`, `Date Range`, `Indices`), concurrency controls, and automatic ZIP packaging.
- **Stories & Highlights Support**: One-click download for single Stories or full Story/Highlight reels.
- **Reels & Audio Support**: Download full-resolution Reels video streams at original quality.
- **Customizable Filenames & Metadata**: Configure custom filename patterns (`{username}`, `{datetime}`, `{shortcode}`, `{index}`) and optional `.txt` caption metadata files.
- **Resilient Media Extraction (v5.3.4)**:
  - Automatic GraphQL/REST schema fallback across `xdt_api__v1__media__shortcode__web_info`, `xdt_shortcode_media`, and `/api/v1/media/{pk}/info/`.
  - Direct DOM media fallback when Instagram rate-limits (`HTTP 429`) or blocks background API lookups.
  - Background Service Worker fetch proxy (`fetch_array_buffer`) to bypass cross-origin CDN (`cdninstagram.com` / `fbcdn.net`) CORS blocks during bulk ZIP downloads.

---

## 🚀 Installation & Download

### Option 1: Quick Install via Pre-Packaged ZIP (Recommended)

1. Download the latest pre-built extension archive from **[Releases](https://github.com/Sandidsisir/SaveGram/releases/latest)** (`SaveGram-v5.3.4.zip`).
2. Extract the downloaded `.zip` file into a permanent folder on your computer.
3. Open Chrome, Brave, Edge, or any Chromium browser and go to:
   ```text
   chrome://extensions/
   ```
4. Enable **Developer mode** using the toggle in the upper-right corner.
5. Click **Load unpacked** (top-left) and select the extracted folder.
6. Open or refresh [instagram.com](https://www.instagram.com/) — SaveGram is ready to use!

---

### Option 2: Clone & Run from Source

1. Clone this repository:
   ```bash
   git clone https://github.com/Sandidsisir/SaveGram.git
   ```
2. In your Chromium browser, go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the **`src`** directory inside the cloned repository.
5. Open [instagram.com](https://www.instagram.com/) to start downloading.

---

## 🗂️ Repository Structure

```text
SaveGram/
├── .github/
│   └── workflows/
│       └── release.yml                # CI workflow for syntax checks & release packaging
├── assets/
│   └── logo.svg                       # SaveGram vector starburst logo
├── scripts/
│   └── pack.js                        # Node script to validate & package src/ into a release zip
├── src/                               # Chrome Extension root (select this folder for "Load unpacked")
│   ├── css/
│   │   ├── extension.css              # In-page download buttons, modal, and progress bar styles
│   │   └── options.css                # Extension Options page styles
│   ├── icons/                         # SaveGram PNG, SVG, and ICO icons
│   ├── js/
│   │   ├── background.js              # Manifest V3 Service Worker (download lifecycle & CORS proxy)
│   │   ├── extension.js               # Main content script (UI injection, queue manager, JSZip bundler)
│   │   ├── inject.js                  # MAIN-world XHR/fetch interceptor for GraphQL & REST media data
│   │   ├── options.js                 # Extension Options page UI
│   │   └── options_listener_inject.js # Options bridge script
│   ├── manifest.json                  # Chrome Extension Manifest V3 configuration
│   └── options.html                   # Extension settings page
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

---

## 🛠️ Development & Packaging

Verify JavaScript syntax across all extension scripts:

```bash
npm run lint
```

Build a distributable Chrome Web Store / GitHub Release `.zip` archive in `dist/`:

```bash
npm run pack
```

---

## 📄 License

Distributed under the [MIT License](LICENSE).
