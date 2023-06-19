/**
 * sử dụng iife khi muốn bao đóng lại để không bị trùng tên các function cũng như
 * không thoát khỏi ra phạm vi global
 *
 * chạy function ngay khi định nghĩa, không cần phải gọi ,
 *
 * và phải cách nhau là ";"
 *
 * cấu trúc :
 * ;(function(){
 * ..logic
 * })()
 * @returns
 */

const app = function () {
  //private
  const cars = [];
  return {
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
};
