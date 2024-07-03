const arr = [{j:'k'}, {l:'m'}];
const shallow = [...arr]; // 얕은 복사
console.log(arr===shallow);
console.log(arr[0]===shallow[0]);

const shallow2 = array.slice();// 얕은 복사
const shallow3 = array.concat();// 얕은 복사
console.log(array===shallow2);
console.log(array[0]===shallow2[0]);
console.log(array === shallow3);
console.log(array[0] === shallow3[0]);

const deep = JSON.parse(JSON.stringify(array));//깊은 복사
console.log(array === deep);
console.log(array[0] === deep[0]);

const A= {
    name: '강아지',
};
const B = A;
const C = B;
A.name = '고양이'
console.log(B.name);
console.log(C.name);