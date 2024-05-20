let parentElement = document.querySelector('ul');
let elementCreate  = document.createElement('li');
let textCreate = document.createTextNode('hello Harshit');
elementCreate.appendChild(textCreate);
parentElement.appendChild(elementCreate);

parentElement.insertBefore(elementCreate,parentElement.children[1])
console.log(elementCreate)