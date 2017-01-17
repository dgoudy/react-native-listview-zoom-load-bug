## React Native ListView layout bug demo

### Description

Minimal repo showing a layout bug that occurs when a zoomed in ListView loads more items.

### Reproduction

* Zoom in so that "0 - Top" remains at the top of the view, and "0 - Middle" is near the bottom of the view.
* Scroll to the right until more items load, near item 7 or so.
* ListView content jumps sideways to item 10 or so, and upwards so that "10 - Middle" is now in the middle of the view, instead of at the bottom.
* Zoom out again. "Middle" will be near the top of the view, and there will be a gap between the bottom of the ListView and the bottom of the screen. You are unable to scroll the view upwards to see the tops of the items. You are also unable to scroll all the way back to the beginning of the list.

See also: https://rnplay.org/apps/75Oomw

### Additional Information

* React Native version: 0.40.0 (on device), 0.33.0 (rnplay.org)
* Platform: iOS 10.2
* Operating System: MacOS 10.12.2, XCode 8.2.1
