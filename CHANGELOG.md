# Changelog

## [1.1.0] - 2026-11-05

### Added
- "Download Reel" action button injected directly into Instagram's native Reels 3-dot popup menu and dialogs.
- Automatic detection and injection of download buttons on vertical Reels control strips with improved hover styling.

### Fixed
- Reel targeting: uses screen visibility calculations to detect active video elements accurately.
- Filtered out non-media routes (`/audio/`, `/videos/`, `/saved/`) from shortcode matching.
- Added direct video DOM fallback for reels when background API queries fail.

## [1.0.0] - Initial Open-Source Release

### Fixed
- **Profile "Download All" & Post Resolution (`js/inject.js`)**:
  - Hooked `JSON.parse` and `XMLHttpRequest.prototype.open` synchronously so unmasked GraphQL responses (`xdt_api__v1__feed__user_timeline_graphql_connection`, `xdt_shortcode_media`, `image_versions2`, `video_versions`, `carousel_media`) are harvested before CometRelay masks fragments.
  - Added fallback harvesting directly from `PolarisRelayEnvironment.getStore().getSource()`.
  - Fixed cache merge logic so single-image and single-video posts merge cached unmasked media fields instead of requiring `getSlideCount >= 2`.
  - Added support for newline-delimited multi-chunk streaming GraphQL responses (`@defer`).
- **DOM Shortcode & React Fiber PK Extraction (`js/inject.js` & `js/extension.js`)**:
  - Restricted React Fiber ID matching to 10+ digit Instagram PKs (`/^\d{10,}$/`) so list indices (`"0"`, `"1"`) are never misidentified as post IDs.
  - Added support for `/<username>/p/<shortcode>/`, `/<username>/reel/<shortcode>/`, and `/reels/<shortcode>/` permalink formats.
  - Added `translateX` and `?img_index=` slide index detection for virtualized carousels.
- **Media Blob Fetching & Saving (`js/extension.js` & `js/background.js`)**:
  - Updated content-script `fetch()` to use `{ cache: "no-store", mode: "cors", credentials: "omit" }` to bypass non-CORS cached `<img>` responses in Chrome.
  - Added `fetchMediaBlob` fallback in the Manifest V3 background service worker (`js/background.js`) using extension `host_permissions`.
  - Fixed `triggerBrowserDownload` (`Re`) to create a fresh `<a download>` element per file and delay `URL.revokeObjectURL` by 60 seconds.
  - Added `try / finally` cleanup around all `"Finding posts..."` and `"Downloading..."` progress bars so they never remain stuck on screen.
