function start_fun(){
    let listing_parent = document.querySelector('ul');
    let child_sec = listing_parent.children; 
    let child_sec_array = Array.from(child_sec); 
    
    let a = 0;
    let ani = setInterval(()=>{
        console.log(a);
        child_sec_array[a].classList.add('ani'); 
        a++;
        if(a>child_sec_array.length-1){
            clearInterval(ani);
        }
    },500);
}
