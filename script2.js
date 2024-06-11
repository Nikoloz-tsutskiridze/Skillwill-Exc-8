"use strict";

function deepCopyAsync(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      return reject(new Error("Argument is not an object"));
    }

    function deepCopy(obj) {
      if (obj === null || typeof obj !== "object") {
        return obj;
      }

      if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
          arrCopy[i] = deepCopy(obj[i]);
        }
        return arrCopy;
      }

      let objCopy = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepCopy(obj[key]);
        }
      }
      return objCopy;
    }

    try {
      let copiedObj = deepCopy(obj);
      resolve(copiedObj);
    } catch (error) {
      reject(error);
    }
  });
}
deepCopyAsync({ a: 1, b: { c: 2 } })
  .then((copiedObj) => {
    console.log("Copied object:", copiedObj);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

deepCopyAsync("Not an object")
  .then((copiedObj) => {
    console.log("Copied object:", copiedObj);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
