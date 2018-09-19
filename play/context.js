((msg) => {
  tryCatch(msg)((() => {
    var context = new AudioContext();
  }).bind(this));
})(`
Looks like your browser doesn't support the Web Audio API.
Why not try out a modern browser?

- firefox.com
- chrome.com

<3`).bind(this);