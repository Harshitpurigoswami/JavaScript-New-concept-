
var x = 1;  
if(true){
    var x = 100;
    setTimeout(()=>{
        console.log(x); 
    },0);
}  

if(true){
    var x = 200;
    setTimeout(()=>{
        console.log(x); 
    },0);
} 


// in the case of var 
// settimeout excute the line in last and he want a value of x and x is global initials so last value is get 
// and let is block scope so when settime out is come back he want x value so he give to the value on the block 
// scope basis give so inside a block scope value .