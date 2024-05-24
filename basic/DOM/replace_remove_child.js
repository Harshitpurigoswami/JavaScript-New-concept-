let parent_element = document.querySelector('ul');
// console.log(parent_element);

// create a tag and text also add 

let create_element = document.createElement('li')
let create_text = document.createTextNode('Hy Harshit')

// append text and tag

create_element.appendChild(create_text);

// let child_address = parent_element.children[0] // this is targeting value
// console.log(child_address)
// // replace child
// parent_element.replaceChild(create_element,child_address)
// // console.log(child_address)

// // remove child
// // if(true){
// //     parent_element.removeChild( parent_element.children[0])
// // }

parent_element.replaceChild(create_element,parent_element.firstElementChild)