# Changelog

## [1.2.0] - 2026-11-06

### Added
- Video Player Controls: Added player control bar to Instagram videos and Reels with play/pause, interactive seek bar, current/total time display, vertical volume slider, mute toggle, Picture-in-Picture (PiP), and fullscreen mode.
- Toolbar Settings Popup: Added popup menu with preferences for default muted state, autoplay, PiP, time labels, fullscreen, and control bar auto-hide delay.
- Multi-Language Localization: Added localization support across 5 languages (English, German, Spanish, Italian, and Portuguese).
- Author attribution configured to `sandid`.

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
- Profile "Download All" & Post Resolution (`js/inject.js`).
- DOM Shortcode & React Fiber PK Extraction.
- Media Blob Fetching & Saving via Manifest V3 Service Worker.
