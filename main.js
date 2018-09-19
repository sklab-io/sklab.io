
try {
  var context = new AudioContext();
  const init = (msg) => () => {
    try {
      console.log(msg);
      throw msg;
    } catch (e) {
      console.error(e);
      alert(`
        Seems like your browser doesn't support ES6.
        
        Check out a modern browser like FireFox (firefox.com) or Chrome (chrome.com).
        
        <3`);
    }
  };
  ((msg) => {
    window.addEventListener('load', init(msg));
  })('site loaded');
} catch (e) {
  console.error(e);
  alert(`
    Seems like your browser doesn't support ES6 or the Web Audio API.
    
    Check out a modern browser like FireFox (firefox.com) or Chrome (chrome.com).
    
    <3`);
}
