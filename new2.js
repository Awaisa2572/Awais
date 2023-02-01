 const x=4;
const y=10;
function add(x,y)
{
    console.log(x+y);
}
try{
    console.log(add (undefined,6));
} catch(err) {
    console.log('ERROR:',err);
}
function main() {
    let x =4;
    let y =10;
    if ((x !="number" || y !="number")){
        console.log("not a number")
    }
}

main("7",9)


const divide =(x,y) => {
    console.log(x/y);
}
let a=5;
let b=0;

divide(a,b);


const arr=[5,7,3,8,2,3,8,6];
if (arr.length) {
    let filtered = arr.filter (item => item % 2 ==0);
    console.log(filtered);
}
console.log(arr.reverse())

// const arr2 = ["eye", "legal" , "iii" , "abc" , "reer"];

const str2 = "eye";

function palidrom() {
    //const newARR = [...str2];
    if(str2.split("").reverse().join("") ===str2){
        console.log("string is palidrom")
    }
    else{
        console.log("string is not palidrom");
    }
}

palidrom(str2)