let first_ul = document.querySelector('#first_node li:first-child');
let second_ul = document.querySelector('#second_node li:first-child');

let value = first_ul.isEqualNode(second_ul)

console.log(value)