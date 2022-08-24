## Day11 Custom Video Player

### Summary

Build HTML5 video player interface with speed, volume, play, pause and skip sidebar and buttons.

### Practice

#### 1. Get the elements in HTML by query selectors

#### 2. Build the functions

- a. There's a method in the video element called `[paused](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused)`, the default value is true.

[HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)

[HTMLMediaElement.pause()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause)

- b. Skip buttons would be used with `video.currentTime`

- c. Update `flex-basis` with `.progress__filled` in progress bar

Listen to the `timeupdate` event and execute the function `handleProgress`

To wrap up, there're some methods in this video I've learned in this app:

- play()

- paused

- currentTime

- duration

- volume

- playbackRate

#### 3. Hook up the event listeners

### Future Improvement

- volume & playback rate sidebar could have some hints

- [How to build a Custom HTML5 Video Player with JavaScript](https://freshman.tech/custom-html5-video/)

### Reference

1. [UTF-8 Miscellaneous Symbols](https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp)

2. [UTF-8 icons](https://www.utf8icons.com/)