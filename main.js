try {
  ((msg) => {
    window.addEventListener('load', () => {
      console.log(msg);
      const getAudioContext = () => () => { return new AudioContext(); };
      console.log({
        getAudioContext,
      });
    });
  })('site loaded');
} catch (e) {
  console.error(e);
}