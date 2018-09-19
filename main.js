
/** GLOBAL SITE SCRIPTS **/

/// Declare global objects in other files.
/// Add src links above references to this file.
((msg) => {
  tryCatch(msg, (() => {
    const init = () => {
      try {
        console.log(msg);
      } catch (e) {
        handle(e);
      }
    };
    window.addEventListener('load', init);
  })).bind(this);
})(`
Looks like your browser doesn't support ES6 or the Web Audio API.
Why not try out a modern browser?

- firefox.com
- chrome.com

<3`).bind(this);
