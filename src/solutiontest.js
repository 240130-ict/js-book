function solution(a, d, included) {
    let answer = 0;
    const nums = [a];
    for(let i =1; i<included.length;i++){
        nums[i] = nums[i-1]+d;
    }
    
    for(let j=0;j<included.length;j++){
       if(included[j]==true){
        answer = answer + nums[j];
       }
        
    }
    
    return answer;
}

const r = solution(3,4,[true, false, false, true, true]);
console.log(r);


function solution2(a, b) {
    var answer = 0;
    
    let a1 = a.toString();
    let b1 = b.toString();

    let res1 = a1 + b1;

    let ab = parseInt(res1);

    if(ab > 2*a*b){
        answer = ab;
    } else if (ab < 2*a*b) {
        answer = 2*a*b;
    }
    else {
        answer = ab;
    }
    return answer;
}

const s = solution2(2,91);
console.log(s);

function solution(a, b, flag) {
  
    let answer = solution2(a,b,flag);

    return answer;
}

function solution2(a, b,flag) {
    let answer = 0;
    if(flag){
        answer = a+b;
    }else{
        answer = a-b;
    }
    return answer;
}
const t = solution(-4,7,true);
console.log(t);

function a(){
    return 10;
}
console.log(a());
console.log(a());
console.log(a());

const b = a();
console.log(b);

function a1(parameter){
    console.log(parameter);
}
console.log(a1('argument'));

function a(w,x,y,z){
    console.log(w,x,y,z);
}
a('Hello','Parameter','Argument',1);
console.log(a)

const zerocho = {
    name : '조현영',
    year : 1994,
    month : 8,
    date : 12,
    gender : 'M',
}

console.log(zerocho.name);