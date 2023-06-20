/**
 * Reference type and value type 
 * 
 * Value type (Primitive data type)(nguyen thuy)
 * => luu trong 1 o nho va neu b=a => b sao chep gia tri cua a 
 *     va tao 1 vung nho va luu gia tri vao vung nho 
 * 
 * 
 * Reference type (Non-primitive type)(phuc tap)
 * => luu trong o nho va tra ve dia chi vaf gan dia chi vao bien 
 * 
 * moi lan tao ra 1 object moi se tao ra 1 o nho moi , tru khi object.key =value 
 * 
 * 
 * Reference type and value type with function
 * 
 * 
 *value type => sao chep gia tri va tao o nho moi giong nhu a=c
 function sum(a,b){
    console.log(a,b)
 }
 const c=1
 const d=2
 sum(c,d)
 * reference type => tro den dia chi giong nhu {}={}
function fun(obj){
    console.log(obj)
}
const a={name:"BMW"}
fun(a)
con
 */

/**
 * Reference type and value type with function
 */

/**
 * value type => sao chep gia tri va tao o nho moi giong nhu a=c
 */
function sum(a, b) {
  console.log(a, b); //(1,2)
}
const c = 1;
const d = 2;
sum(c, d);
console.log(c, d); //(1,2)

/**
 * reference type => tro den dia chi giong nhu {}={}
 * =>cung tri vao 1 dia chi
 *
 * ==> SIDE EFFECT (tac dung phu)
 */
function fun(obj) {
  obj.name = "Mercedes";
  console.log(obj); //mercedes
}
const a = { name: "BMW" };
fun(a);
console.log(a); //mercedes

/**
 * khac phuc nhu sau :
 *
 * => dung JSON de tao 1 vung nho va no se tao nhieu cap sau cua object (dung cho nhieu cap)
 *
 *=> dung spread{...object} de gia ra va bao boi 1 object khac luc nay cung tao ra 1 o nho khac (dung cho 1cap)
 */
// JSON
function createCar(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  obj.name = "Mercedes";
  return obj;
}
//Spread{...object}
function createCar(obj) {
  obj = { ...obj };
  obj.name = "Mercedes";
  return obj;
}
const car = { name: "BMW" };

const newCar = createCar(car);
console.log(car);
console.log(newCar);

// so sanh 2 object khac dia chi se la false ===    
const obj1 = {name:"a"}
const obj2 = {name:"b"}
obj1===obj2// false 

//const object => gan dia chi cho bien nen thay doi value tu key se sao 

const obj3 = {name:"c"}
obj3.name="d"
console.log(obj3)//{name:'d'}   


//object nhu array 
const obj4={name:"abc"}    
obj4['a']="test"
console.log(obj4)

