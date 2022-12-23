const userLeft = false;

const userReading = false;

function ReadingCallBack(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user Left",
      message: ":(",
    });
  } else if (userReading) {
    errorCallback({
      name: "user Reading",
      message: "thanks for reading",
    });
  } else {
    callback("Give a like from you heart");
  }
}

ReadingCallBack((message) => {
  console.log("whaooo :) " + message);
});
