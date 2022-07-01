# Twitch Channel Points Collector
This browser extension automatically collects channel points while watching streams on [Twitch](https://www.twitch.tv).

## But why?
Twitch repeatedly rewards its users with channel points after watching streams for a certain time. These points can be used to unlock additional features like exclusive emotes. Unfortunately, users have to click a button manually to claim these points. This circumstance draws the user's attention away from the actual stream and makes Twitch a less enjoyable experience. The presented extension aims to ease the process by collecting channel points automatically in the background as soon as they are available.

## Setup
* Chromium based browsers (Google Chrome, Microsoft Edge, Opera, Vivaldi, etc.)
    1. Type `chrome://extensions` in the address bar. (If you use a browser other than Google Chrome, it will redirect you automatically.) 
    2. Enable the __Developer mode__ temporarily.
    3. Click __Load unpacked extension...__ and select the extension's folder.

* Firfox:
    1. Delete the `manifest.json` file and rename `manifest_firefox.json` to `manifest.json`.
    2. Type `about:debugging#/runtime/this-firefox` in the address bar.
    3. Click __Load Temporary Add-on__ and select the `manifest.json` from the extension's folder.

    _Note:_ Extensions which are installed this way only remain installed until Firefox restarts.  