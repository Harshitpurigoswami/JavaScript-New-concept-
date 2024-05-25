let parent = document.querySelector('ul')
let childElelment = document.querySelector('ul li')

let value = childElelment.hasAttribute("class")
let value_child = childElelment.hasChildNodes(); // it find the value is present    

console.log(value , value_child)

// 