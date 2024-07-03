const debug = {
    log : function(value){
        console.log(value);
    },
};
debug.log('Hello, Method');

const a = {name: 'zerocho'};
const array = [1,2,a];
console.log(a === array[2]);



 