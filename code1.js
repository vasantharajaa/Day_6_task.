//Fix the code to get the largest of three.

//Code:
/*
let f,s,t;
aa = (f,s,t) => {
 
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f);
}
 else if(s>f && s>t){
 console.log(s);
}
 else{
 console.log(t);
}
}
aa(89,99,96);
*/
//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to Sum of the digits present in the number

//Code:
/*

let n = 9999;
console.log(add(n));

function add(n)
{
    let sum=0;    
while(n>0){
let lastdigit=n%10;
sum=sum+lastdigit;
n=Math.floor(n/10);
}
 return sum;
}
//— — — — — — — — — — — — — — — — — — — — — — — — —

*/

//Fix the code to Sum of all numbers using IIFE function

//Code:

/*
const arr = [9,8,5,6,4,3,2,1];
let s=(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 
 return sum;
})();
console.log(s);
//— — — — — — — — — — — — — — — — — — — — — — — — —
*/

//Fix the code to gen Title caps.

//Code:
/*

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano(arr);
*/
//Fix the code to return the Prime numbers

//Code:
/*

const newArray=[1,3,2,5,10,17];

const myPrime=newArray.filter(num=>{
    if(num <=1){
        return false;
    }
 for(let i=2;i<=Math.sqrt(num);i++){
    
 if(num%i===0)
 {
 return false;
 }
 }
 return true;
});
console.log(myPrime);
//— — — — — — — — — — — — — — — — — — — — — — — — —


//Fix the code to sum the number in that array

//Code:

const num = [10,20,30,40,50,60,70,80,90,100] ;
((num) =>{
    let sum=0;
    for(let i=0; i<num.length;i++){
        sum+=num[i];

    }
    console.log (sum);

}
)(num);
 


*/

// Rorate array
/*

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
let n=arr.length;
k=k%arr.length;
(function(){
    const ans=(arr,k)=>{
    
    let temp=[...arr.slice(n-k), ...arr.slice(0,n-k)];
    return temp;

}
const rorate=ans(arr,k);
console.log(rorate)

})();





*/
/*
// print all odd numbers in an array using IIFE function

//Code:

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(){
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();
//— — — — — — — — — — — — — — — — — — — — — — — — —
*/
/*
// Fix the code to reverse
(function(a){
let str=a.split("").reverse().join("");
console.log(str);

})("kamatchi");
*/
/*
let arr=["banana","guvi","geek","guvi","banana","banana"];

(function(arr){
    const ans=[...new Set(arr)];
    console.log(ans);


})(arr);
*/
/*
const num = [10,21,30,41,51,60,71,80,91,100] ;
((num) =>{
    let sum=0;
    for(let i=0; i<num.length;i++){
        if(num[i]%2 !=0){
            sum+=num[i];

        }
        

    }
    console.log (sum);

}
)(num);
*/


// Swap odd and even  elements
const num = [10,21,30,41,51,60,71,80,91,100] ;
((num)=>{
   
    for(let i=0;i<num.length-1;i++){
       
        if(num[i]%2 != num[i+1]%2){
            let temp=num[i+1];
            num[i+1]=num[i];
            num[i]=temp;
            i++;


        }
       

    }
    console.log(num);
})(num);