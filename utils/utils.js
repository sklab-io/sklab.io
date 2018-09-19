
const handleError = msg => e => {
  console.error(e);
  alert(msg);
};

const tryCatch = msg => tryFn => {
  const handle = handleError(msg);
  try {
    tryFn();
  } catch (e) {
    handle(e);
  }
};
