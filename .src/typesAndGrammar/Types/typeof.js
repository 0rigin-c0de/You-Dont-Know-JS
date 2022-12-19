(function () {
  function FeatureXYZ() {}
  function doSomethingCool() {
    var helper =
      typeof FeatureXYZ !== "undefined"
        ? FeatureXYZ
        : function () {
            /*.. default feature ..*/
          };

    var val = helper();
    // ..
  }

  doSomethingCool();
})();
