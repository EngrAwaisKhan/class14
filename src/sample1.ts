// console.log('Hello World in sample2 TS');

// document.write('Hello World from TS Sample1');

// const isEven: boolean[] = [true, false];

// function checkNumber(num: number){
//     return num % 2 === 0;
// }

// console.log(checkNumber(9));

// let a: any = true;
// a = 3;
// a = 'string';
// console.log(a);

let a : unknown = 30;
let b = a ===343;
if(typeof a === 'number'){
    let d = a + 10;
    console.log(d);
}
