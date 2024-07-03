const arr = [1,5,4,2];
arr.forEach((number, index) => {
    console.log(number,index);
});

const numbers = [];
for(let n = 1 ; n <=5;n+=1){
    numbers.push(n);
}

console.log(numbers);

const numbers2 = Array(5).fill(1).map((v, i) => i+1);

console.log(numbers2)

const array = [1,3,5,7];
const newArray = array.map((v,i)=>{
    return v * 2;
});
console.log(array);
console.log(newArray);

array.every((value) => value !== null);