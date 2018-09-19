try {
  ((msg) => {
    const ctx = new AudioContext();
    window.addEventListener('load', () => {
      console.log(msg);
      console.log(ctx);
    });
  })('site loaded');
} catch (e) {
  console.error(e);
}