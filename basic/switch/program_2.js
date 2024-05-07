var a; 
a = Number(prompt('Enter a number in 1 to 3 '));

switch (a){
    case 1 : 
        let b = 3;
        let c = 3;
        let d = b + c;
        console.log(d + " is the total of " + b + " or " + c);
        break;
    case 2 : 
        console.log('2');
        break;
    
    default :
        console.log('default');
    
} 