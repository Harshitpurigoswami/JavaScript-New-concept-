// let parentElement = document.querySelector('ul');
// let elementCreate  = document.createElement('li');
// let textCreate = document.createTextNode('hello Harshit');
// elementCreate.appendChild(textCreate);
// parentElement.appendChild(elementCreate);
// parentElement.insertBefore(elementCreate,parentElement.children[0])
// console.log(elementCreate);

// Insert Adjacent method
// insertAdjacentElement  /  insertAdjacentHTML
// insertAdjacentText

let parentElement = document.querySelector("ul");

let newElement = document.createElement('li');
let newText = document.createTextNode('Hy Harshit');
newElement.appendChild(newText)

// parentElement.insertAdjacentElement("beforebegin",newElement)
// parentElement.insertAdjacentElement("afterbegin",newElement)
// parentElement.insertAdjacentElement('beforeend',newElement)
// parentElement.insertAdjacentElement('afterend',newElement)
let full_html = "<ul><li>Hy Harshit</li></ul>";
// parentElement.insertAdjacentHTML('afterbegin',full_html)
// parentElement.insertAdjacentHTML('beforebegin',full_html)
// parentElement.insertAdjacentHTML('beforeend',full_html)
// parentElement.insertAdjacentHTML('afterend',full_html)
// parentElement.insertAdjacentText('beforebegin','text')
// parentElement.insertAdjacentText('afterbegin',"dsfdfsdf")
console.log(newElement)


// Revision

parentElement.insertAdjacentElement('afterbegin',newElement)
parentElement.insertAdjacentElement('beforeend',newElement)
parentElement.insertAdjacentHTML('beforebegin',full_html)