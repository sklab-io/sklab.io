


try {
  var context = new AudioContext();
  const exceptionAlert = (e) => {
    console.error(e);
    alert(`
        Seems like your browser doesn't support ES6.
        
        Check out a modern browser like FireFox (firefox.com) or Chrome (chrome.com).
        
        <3`);
  };
  const init = (msg) => () => {
    try {
      console.log(msg);
    } catch (e) {
      exceptionAlert();
    }
  };
  ((msg) => {
    window.addEventListener('load', init(msg));
  })('site loaded');
} catch (e) {
  exceptionAlert(e);
}
