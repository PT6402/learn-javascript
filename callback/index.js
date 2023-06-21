//callback
function program2() {
  console.log("mua do");
}
function program1(callback) {
  setTimeout(() => {
    console.log("lay tien");
    callback();
  }, 2000);
}
program1(program2);


