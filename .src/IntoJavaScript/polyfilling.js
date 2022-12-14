/* Number.isNaN(..) is an accurate non-buggy check for NaN values,
 deprecating the original isNaN(..)*/

if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}
