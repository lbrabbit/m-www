# m-www
Homepage https://github.com/lbrabbit/m-www

Forked from https://github.com/mdn/webextensions-examples/tree/master/open-my-page-button

# What it does: WebExtension for m <-> www on URL

How to browse facebook faster? use https://m.facebook.com ! But this mobile version sometimes lacks important functions. This extension makes it easy to switch between m<->www .

This extension includes:

* a background script, "m-www.js"
* a browser action

# Installation

Currently, this extension is not registered at https://addons.mozilla.org .

Method 1:Unsigned add-ons can be installed in Developer Edition, Nightly, and ESR versions of Firefox, after toggling the xpinstall.signatures.required preference in about:config. Then you can drag the m-www@black.rabbit.xpi and allow it to be installed. https://developer.mozilla.org/en-US/Add-ons/Distribution

Method 2:Download all the files and follow the instruction at https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension
using the about:debugging page to load this extension.

# Further Development

* Change icons
* Use regex more effectively
