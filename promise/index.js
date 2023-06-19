/**
 * status:
 * +Pending
 * +Fulfilled
 * +Rejected
 */

var promise = new Promise(function (resolve, reject) {
  return resolve();
});
promise
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("abc");
      }, 1000);
    });
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {})
  .finally(function () {});

//Example 2
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
/**
 * chi khi return la promise, then ben duoi se doi khi nao resolve
 */
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject("co loi");
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .catch(function (err) {
    console.log(err);
  });

// Example 3
var promise3 = new Promise(function (resolve, reject) {
  //   resolve("Success");
  reject("Error !");
});
promise3
  .then(function (result) {
    console.log("result: ", result);
  })
  .catch(function (err) {
    console.log("error :", err);
  });

// viet gon hon
var promise4 = Promise.reject("Error !");
promise4.catch(function(err){
    console.log(err)
})
// Promise.all()

var promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});
var promise6 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 3000);
});
// tong thoi gian tren la 3

Promise.all([promise5, promise6]).then(function ([result1, result2]) {
  console.log(result1.concat(result2));
});
