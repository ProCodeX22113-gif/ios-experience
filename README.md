# iOS Experience — personal web environment

An iOS-inspired, mobile-first productivity web app built with static HTML, CSS and JavaScript modules. It is a research prototype, not Apple's iOS and not a replacement for Android.

## Included features

- Responsive home screen, live clock/date, app launcher, dock, global search, and Control Center-style panel.
- Notes with search, tags, pinning, import and export.
- Reminders/tasks with due dates and priority.
- Local event list with export.
- Calculator with a small arithmetic parser (no `eval`) and history.
- Browser/search shortcuts, recent links, and bookmarks.
- File picker with text/image previews and text-file download.
- Local audio player for files the user chooses.
- Countdown timer, stopwatch, unit converter.
- Wallpaper options, reduced-motion preference, local data backup/restore and reset.
- Web app manifest and service worker for best-effort offline use.

## Run locally

Because ES modules and service workers behave differently from `file://` URLs, serve this folder over HTTP for a full test. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Service workers require HTTPS or localhost.

## Deploy free with GitHub Pages

1. Upload the **contents** of this folder to the root of a GitHub repository. `index.html` must be in the repository root; keep the `css`, `js`, and `assets` folders in place.
2. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, and save.
3. Wait for deployment and open the `github.io` URL shown in Pages settings.
4. On Android, open the site in a compatible browser and use **Add to Home screen** if offered. Hermit can also open the public URL as a Lite App.
5. After changing files, commit the changes and allow Pages to redeploy. If stale assets remain, refresh or clear that site's cache; the service-worker cache name may be incremented in `service-worker.js` when releasing a new version.

For the repository `ProCodeX22113-gif/ios-experience`, the expected URL is `https://procodex22113-gif.github.io/ios-experience/` after Pages is enabled and deployment succeeds.

## Storage and privacy

App records are saved in `localStorage` in the current browser origin. They are not synchronized between devices and may be removed if site data is cleared. Use Settings → Export all data to make a backup. Import only backup files you trust. Selected media files are handled locally by the browser; external links open third-party websites.

## Important browser limitations

- A web page cannot generally toggle Android Wi-Fi, Bluetooth, airplane mode, system volume, or read notifications from other apps.
- File access is limited to files the user selects and browser APIs permit.
- This calendar is local and does not sync with Google/Apple calendars.
- In-app reminders are not guaranteed to fire after the browser is closed or suspended.
- PWA install prompts and background features vary by browser. Hermit may not support every PWA feature identically to Chrome.
- Offline mode works after required assets have been cached successfully; external websites still need a network connection.

## Suggested research test plan

Record real measurements on the target devices. Do not treat these as pre-measured results.

| Test | Procedure | Pass criterion |
|---|---|---|
| Initial load | Open hosted site on target phone | Home screen appears without a fatal error |
| Navigation | Open and close each app | Each app can be reached and returned from |
| Notes persistence | Save a note and reload | Note remains available in same browser profile |
| Task operations | Add, complete, delete a task | Each operation updates the displayed list |
| Backup/restore | Export, then import on a test profile | Supported records restore without malformed data |
| Offline | Load online, wait for cache, switch offline and reload | Core shell and cached modules open |
| Responsive layout | Test portrait/landscape and desktop | No essential controls are unreachable |
| Accessibility | Keyboard focus and reduced-motion settings | Focus is visible and reduced-motion is respected |
| Honest controls | Try each Control Center item | Unsupported device controls are explained, not falsely reported as changed |

## Architecture

- `index.html`: app shell and main UI regions.
- `css/styles.css`: responsive styling and themes.
- `js/app.js`: routing, home screen, search, clock and shell behavior.
- `js/storage.js`: local storage, import/export helpers.
- `js/apps/`: feature modules.
- `manifest.webmanifest`: PWA metadata.
- `service-worker.js`: static asset caching and offline fallback.

## Known limitations / next steps

This is a usable prototype, not a fully privileged mobile OS. Potential improvements include IndexedDB migration for larger data, stronger automated testing, event editing, browser-notification opt-in, app reorder persistence, more robust service-worker update UX, and user testing on multiple browsers. No research performance results are claimed in this repository.
