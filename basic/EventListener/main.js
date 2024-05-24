// let box = document.querySelector('#box');
// box.addEventListener('mousemove',(ele)=>{
//     let x =ele.clientX;
//     let y = ele.clientY
//     console.log(x , y );
// })

// function mousemove_fun(event){
//     let x =event.clientX;
//     let y = event.clientY
//     console.log(x , y );
// };


//  *********************

function ul_fun(event,a){
    var link_val = a.dataset.hash;
    window.open(link_val, '_blank');
}

function li_fun(event,a){ 
    var link_val = a.dataset.hash;
    window.open(link_val, '_blank');
    event.stopPropagation();
}