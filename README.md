# expo-web-browser: stale tab after the app process is killed (Android)

1. `npm install && npx expo run:android --variant release`
2. Tap "Open page A": the browser shows Wikipedia's "A" page. Leave it open.
3. `adb shell am force-stop com.example.stalebrowser`, then launch the app again and tap "Open page B".
4. Expected: the "B" page. Actual: the "A" page comes back, B is never loaded.
5. Adding `Intent.FLAG_ACTIVITY_CLEAR_TASK` next to `FLAG_ACTIVITY_NEW_TASK` in `CustomTabsActivitiesHelper.kt` (proxy intent) makes B show.
