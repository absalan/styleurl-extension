## 1.0.9

Fix issue where stylesheets after page changes on the same tab were being diffed. For example, you'd open Hacker News, edit some styles, click on a link to a page, then it would show all the Hacker News styles being `unset`.

Now, it clears all the cached styles on `chrome.webNavigation.onCommitted`.

Additionally:

- Made the <CodeDiff /> box 400px wide instead of 320px.
- Made the filenames use "\_" instead of "!" as the replacement character when a character is invalid. For example, before `news.css!asodKPODSAKDPOK.css` and after `news.css_COKASODK.css`

## 1.0.8

Update stylesheet-differ to the latest version, fixing a bad bug.

## 1.0.7

Performance improvements and bug fixes

## 1.0.6

Bump version.

## 1.0.5

Bump version.

## 1.0.4

Bump version.

## 1.0.3

Bump version.

## 1.0.2

Initial Release.