<div align="center">
  <img src="src/icons/savegram.svg" width="80" height="80" alt="SaveGram Logo" />
  <h1>SaveGram</h1>
  <p>A lightweight browser extension for downloading photos, videos, carousels, Stories, and Reels from Instagram.</p>

  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/download/v1.0.0/SaveGram-v1.0.0.zip">
      <img src="https://img.shields.io/badge/Download-SaveGram_v1.0.0_(.zip)-2ea44f?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Download ZIP" />
    </a>
  </p>

  <p>
    <a href="https://github.com/Sandidsisir/SaveGram/releases/latest"><img src="https://img.shields.io/github/v/release/Sandidsisir/SaveGram?color=success&label=Release" alt="Latest Release" /></a>
    <img src="https://img.shields.io/badge/Version-1.0.0-informational" alt="Version 1.0.0" />
    <img src="https://img.shields.io/badge/Manifest-V3-blue" alt="Manifest V3" />
    <img src="https://img.shields.io/badge/License-MIT-lightgrey" alt="License: MIT" />
  </p>
</div>

---

### Direct Download
Download the ready-to-use extension archive: **[SaveGram-v1.0.0.zip](https://github.com/Sandidsisir/SaveGram/releases/download/v1.0.0/SaveGram-v1.0.0.zip)**

---

## Installation Guide (Chrome, Brave, Edge, Opera)

Setup takes about a minute and requires no developer tools:

1. **Download and unpack the ZIP**:
   - Download **[SaveGram-v1.0.0.zip](https://github.com/Sandidsisir/SaveGram/releases/download/v1.0.0/SaveGram-v1.0.0.zip)**.
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
   - Select the extracted `SaveGram-v1.0.0` folder.

5. **Start using it**:
   - Open or refresh [instagram.com](https://www.instagram.com/). Download buttons will appear directly on posts, reels, and stories.

---

## Features

- **Posts and Videos**: Save images and video files at their original uploaded resolution.
- **Carousels**: Grab single slides or download every image and video in a post at once.
- **Stories and Reels**: One-click download buttons on story overlays and reel views.
- **Bulk Profile Downloader**: Collect multiple posts from a profile and export them packed in a ZIP file.
- **Runs Locally**: Built with Manifest V3. Runs entirely in your browser without outside servers or extra logins.

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

[MIT License](LICENSE)
