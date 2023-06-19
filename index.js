const courses = [
    { id:1,name: "abc1", coin: 10 },
    { id:2,name: "abc2", coin: 0 },
    { id:3,name: "abc3", coin: 10 },
    { id:4,name: "abc4", coin: 20 },
    { id:5,name: "abc5", coin: 10 },
    { id:6,name: "abc6", coin: 40 },
    { id:7,name: "abc7", coin: 50 },
];


course = courses.reduce((accumulator,currentValue)=>{ return currentValue.coin + accumulator},0)
console.log(course)