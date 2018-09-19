const handle = customError(`
  Looks like your browser doesn't support the Web Audio API.
  Why not try out a modern browser?

  - firefox.com
  - chrome.com

  <3`);

try {
  var context = new AudioContext();
  throw context;
} catch (e) {
  handle(e);
}