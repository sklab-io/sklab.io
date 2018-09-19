

try {
  const context = new AudioContext();
  ((msg) => {
    window.addEventListener('load', () => {
      console.log(msg);
    });
  })('site loaded');
} catch (e) {
  console.error(e);
}