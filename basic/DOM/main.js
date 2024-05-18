// let document_Tree = document.all;
// we can use * in querySelector('*'); because document.all is Deprecated
// let document_Tree = document.querySelector('*');


// let parent_Div = document.getElementById('main');
// let first_name = document.getElementById('first_name');


// let result = parent_Div.innerHTML;
// let result = first_name.innerHTML;
// let result = parent_Div.innerText;
// parent_Div.setAttribute('id',"my_name");
// parent_Div.attributes[0].value = "my_name"; 
// parent_Div.removeAttribute;
// parent_Div.style.background = '#2213'
// let result = parent_Div.getAttribute('id');
// slet result2 = parent_Div.attributes[0].value;


function main_function(){
    alert("it's working good !");
}

function child_function(){
    // alert("it's working Child Function good !");
// let result = parent_Div.classList.toggle('mainClass');

    console.log(result);
}

let parent_Div = document.querySelector('#main');
let first_name = document.querySelector('#first_name');

parent_Div.addEventListener('click',main_function,true);
first_name.addEventListener('click',child_function);

// let result = parent_Div.classList.add('main1')
// let result = parent_Div.classList.remove('mainClass');
// let result = parent_Div.classList.toggle('mainClass');
// classList.toggle we can use in function

// let result = parent_Div.classList.length;
// let result = parent_Div.classList.item(0);
// let result = parent_Div.classList.contains('mainClass');
let result = parent_Div.attributes[0].value;
result = parent_Div.getAttribute('data-method');

 result = parent_Div.dataset.method;

console.log(result)