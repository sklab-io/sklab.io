
var context = new AudioContext();

try {
  ((msg) => {
    window.addEventListener('load', () => {
      console.log(msg);
    });
  })('site loaded');
} catch (e) {
  console.error(e);
}