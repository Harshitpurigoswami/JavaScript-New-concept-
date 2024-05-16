let arry = [1, 2, 3, 4, 5];
let arryResult;

// sort 
// arryResult = arry.sort(); 
// arryResult = arry.reverse();
// arryResult = arry.pop();
// arryResult = arry.push(3);
// for(let a = 0; a<=10; a++){
//     let prompt_value =  Number(prompt("enter your prompt"));
//     arry.push(prompt_value);
//     console.log(arry);
// }

// arryResult = arry.unshift(1);
// arryResult = arry.join("-");
// arryResult = arry.slice(1,2);
// arryResult = arry.splice(3,0,3.3);
// arryResult = Array.isArray(arry);
// arryResult = arry.indexOf(1);
// arryResult = arry.lastIndexOf(1); 
// arryResult = arry.includes(4);

// function some_method(ele){
//     return ele <= 3;
// }
// arryResult = arry.some(some_method);

// function every_method(ele){
//     return ele <= 6;
// }
// arryResult = arry.every(every_method);

// function find_method(ele){
//     return ele == 3;
// }
// arryResult = arry.find(find_method);



// function find_index_method(ele){
//     return ele == 3;
// }
// arryResult = arry.findIndex(find_index_method);

// function filter_function(ele){
//     return ele <= 3;
// }
// arryResult = arry.filter(filter_function);


// function map_method_fun(ele){
//     return ele*2;
// }
// arryResult = arry.map(map_method_fun);

// arry.forEach((ele)=>{
//     console.log(ele);
// })

// arryResult = arry.toString();

 
// arryResult = arry.fill("harshit");

// entries

// arryResult = arry.entries();

// for(let x of arryResult){
//     console.log(x);
// }

// console.log(arry);
// console.log(arryResult);


// Array with object and map method


function map_fun(ele){
    return ele.first_Name;
}

let obj = [
    {
        first_Name : 'harshit',
        last_Name : 'puri',
        working_Profestion: 'web designer',
        age : 23,
    },
    {
        first_Name : 'rachit',
        last_Name : 'puri',
        working_Profestion: 'Trading',
        age : 21,
    }
]

let obj_Copy = obj.map(map_fun);

for(let ele in obj_Copy){
    console.log(obj_Copy[ele])
}
