// DOM Create Methods
/*
createElement
createTextNode
createComment
*/
// let unorder_list = document.querySelector('ul');
// let text_input;
// function start_fun(){
//     let elem = document.createElement('li');
//     text_input = prompt("Create new Text")
//  let text = document.createTextNode(text_input);
// elem.appendChild(text);
// unorder_list.append(elem);
// console.log(elem);
// }


let ele = document.createElement('h1');
let text = document.createTextNode("Hello world");
let comment = document.createComment('this is comment');
ele.appendChild(text);
console.log(ele);