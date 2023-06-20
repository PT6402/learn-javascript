let name: string = "abc";
//
const obj1: { name: string } = { name: "abc" };
//
type Obj = { name: string };
const obj: Obj = { name: "abc" };
//
interface ObjInterface {
  name: string;
}
const obj2: ObjInterface = { name: "abc" };
//
const func: () => void = () => {
  console.log("hello world");
};
//
const func1: () => string = () => {
  console.log("hello world");
  let name: string = "abc";
  return name;
};
//
const func2: (age: number) => string[] = (age: number) => {
  console.log("hello world");
  let name: string[] = ["abc", "join"];
  return name;
};
//
interface ObjInterface1 {
  name: string;
}
interface ObjInterface2 extends ObjInterface1 {
  age: number;
  address?: string;
}
const object: ObjInterface2 = {
  name: "abc",
  age: 40,
};
//
type ObjType1 = {
  name: string;
};
type ObjType2 = ObjType1 & {
  age: number;
  address?: string;
};
const typeObject: ObjType2 = {
  name: "abc",
  age: 40,
};
