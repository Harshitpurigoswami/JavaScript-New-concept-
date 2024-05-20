/* 
parentNode
parentElement
children
childNodes
firstChild
firstElementChild
lastChild
lastElementChild
nextElementSibling
nextSibling 
previousElementSibling
previousSibling
*/ 
// listing_parent.parentElement.style.background = "red";

let unorderlist = document.querySelector('ul');
let brother = document.querySelector('#brother');
// let result = unorderlist.parentNode;
result = unorderlist.children;
result = unorderlist.firstChild;
result = unorderlist.firstElementChild;
result = unorderlist.lastElementChild;
result = unorderlist.lastChild;
result = brother.nextSibling;
result = brother.previousSibling;
result = brother.previousElementSibling;
console.log(result);