try {
  ((msg) => {
    window.addEventListener('load', () => {
      console.log(msg);
      console.log(new AudioContext());
    });
  })('site loaded');
} catch (e) {
  console.error(e);
}