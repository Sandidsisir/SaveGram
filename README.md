<div align="center">
  <img src="src/icons/savegram.svg" width="80" height="80" alt="SaveGram Logo" />
  <h1>SaveGram</h1>
  <p>A browser extension for saving Instagram media directly to your computer.</p>

  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/download/v1.2.0/SaveGram-v1.2.0.zip">
      <img src="https://img.shields.io/badge/Download-SaveGram_v1.2.0_(.zip)-2ea44f?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Download ZIP" />
    </a>
  </p>

  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/latest"><img src="https://img.shields.io/github/v/release/Sandidsisir/SaveGram?color=success&label=Release" alt="Latest Release" /></a>
    <img src="https://img.shields.io/badge/Version-1.2.0-informational" alt="Version 1.2.0" />
    <img src="https://img.shields.io/badge/Manifest-V3-blue" alt="Manifest V3" />
    <img src="https://img.shields.io/badge/Author-sandid-orange" alt="Author: sandid" />
    <img src="https://img.shields.io/badge/License-MIT-lightgrey" alt="License: MIT" />
  </p>
</div>

---

### Direct Download
Download the ready-to-use extension archive: **[SaveGram-v1.2.0.zip](https://github.com/Sandidsisir/SaveGram/releases/download/v1.2.0/SaveGram-v1.2.0.zip)**

---

## Installation Guide (Chrome, Brave, Edge, Opera)

Setup takes about a minute and requires no developer tools:

1. **Download and unpack the ZIP**:
   - Download **[SaveGram-v1.2.0.zip](https://github.com/Sandidsisir/SaveGram/releases/download/v1.2.0/SaveGram-v1.2.0.zip)**.
   - Right-click the file and click **Extract All**. Keep the extracted folder somewhere permanent (like your Documents folder).

2. **Open your browser's extension manager**:
   - Chrome: go to `chrome://extensions/`
   - Brave: go to `brave://extensions/`
   - Edge: go to `edge://extensions/`
   - Opera: go to `opera://extensions/`

3. **Turn on Developer mode**:
   - Find the **Developer mode** toggle in the top-right corner and turn it on.

4. **Load the folder**:
   - Click **Load unpacked** in the top-left corner.
   - Select the extracted `SaveGram-v1.2.0` folder (or the `src` folder if cloned from git).

5. **Start using it**:
   - Open or refresh [instagram.com](https://www.instagram.com/). Download buttons and video controls will appear directly on posts, reels, and stories.

---

## Features

- **Media Downloader**:
  - Save single photos and videos at original resolution.
  - Download individual carousel slides or all slides at once.
  - Download Reels and Stories directly from page overlays or from the native Reel 3-dot menu.
  - Bulk download posts from profiles into a single ZIP file.
- **Video Player Controls**:
  - Adds interactive seek bar, play/pause, time display, vertical volume slider, and mute toggle to Instagram videos and Reels.
  - Picture-in-Picture (PiP) and fullscreen modes.
  - Extension toolbar popup to configure default playback settings (start muted, autoplay, PiP, time labels, auto-hide delay).
- **Multi-Language Support**:
  - Includes translations for English, German, Spanish, Italian, and Portuguese.
- **Runs Locally**:
  - Built on Manifest V3. Operates entirely in your browser without external servers or logins.

---

## Development

If you prefer running or building directly from source:

```bash
# Clone the repository
git clone https://github.com/Sandidsisir/SaveGram.git

# Check syntax
npm run lint

# Package a clean release zip into dist/
npm run pack
```

---

## License

[MIT License](LICENSE) © 2026 sandid
