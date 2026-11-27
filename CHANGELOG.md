# Changelog

## [1.3.0] - 2026-11-28

### Added
- Master Video Controls Toggle: Added an enable/disable switch at the top of the toolbar popup (`videoControlsEnabledTitle` / `videoControlsEnabledSubtitle`) with localized labels across all 5 languages (`en`, `de`, `es`, `it`, `pt_BR`). When toggled off, all custom player controls, observers, and injected helper classes/styles are cleanly torn down on the page without reloading.
- Instagram-Matched Logo: Redesigned the SaveGram SVG, PNG (`16`, `32`, `48`, `128`, `512`), ICO, and favicon assets with an Instagram-inspired gradient squircle, camera frame, and download icon.

### Changed
- Reduced CPU and DOM overhead across Instagram pages:
  - `assets/instagram-video-controls.ts-DTwx--3R.js`: Debounced control scans, throttled dialog/layout and position checks (`250ms` / `1000ms` / `100ms`), and gated listeners when video controls are disabled.
  - `js/extension.js`: Debounced `MutationObserver` callbacks (ignoring extension overlay/menu mutations), reduced click-triggered scan timers, slowed background interval to `1500ms` (paused on hidden tabs), deduplicated parent checks, and scoped 3-dot menu queries to `[role="dialog"]` / `[role="menu"]`.
  - `js/inject.js`: Switched `MutationObserver` to `childList` only with batched `150ms` node flushing, skipped already-tagged elements (`:not([__igdl_id])`), and added `__igdlSetId` guard.
- Updated extension description in `manifest.json`.

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
