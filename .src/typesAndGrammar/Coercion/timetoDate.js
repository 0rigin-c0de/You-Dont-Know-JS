var timestamp = new Date().getTime();

console.log(timestamp);

// polyfill Date.now
if (!Date.now) {
  Date.now = function () {
    return +new Date();
  };
}
