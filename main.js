
/** GLOBAL SITE SCRIPTS **/

/// Declare global objects in other files
/// and add them to index.html.

const handle = customError(`
  Looks like your browser doesn't support ES6 or the Web Audio API.
  Why not try out a modern browser?

  - firefox.com
  - chrome.com

  <3`);

try {
  const init = (msg) => () => {
    try {
      console.log(msg);
    } catch (e) {
      handle(e);
    }
  };
  ((msg) => {
    window.addEventListener('load', init(msg));
  })('site loaded');
} catch (e) {
  handle(e);
}
