
{
    let innerHeight_Value = window.innerHeight;
    let innerWidth_Value = window.innerWidth;
    let outerHeight_value = window.outerHeight;
    let outerWidth_value = window.outerWidth;

    console.log('Inner Height : ' + innerHeight_Value);
    console.log('Outer Height : ' + outerHeight_value);
    console.log('Inner Width : ' + innerWidth_Value);
    console.log('Outer Width: ' + outerWidth_value);
}

{
    let myWindow;
    function openNewWindow() {
        myWindow = window.open('https://github.com/Harshitpurigoswami', '_blank', "width: 100px");
        myWindow.focus();
    }

    function CloseNewWindow() {
        myWindow.close();
    }


    // MoveBy and MoveTo 
    // only woking in same site
    // function moveBy_fun(){
    //     myWindow.moveBy(100,100);
    // }

    // resizeTo and resizeBy
    // function moveBy_fun(){
    //     myWindow.moveBy(100,100);
    // }
}

{
    function scrollBy_fun() {
        window.scrollBy(0, 100) // This is use many time 
    }
    function scrollTo_fun() {
        window.scrollTo(0, 200)  // This is use only one time 
    }
}


{
    let span = document.querySelector('span');
   window.addEventListener('scroll', function () {
        console.clear()
        console.log(Math.round(window.pageYOffset)); // both are use same and it give scroll value of window 
        console.log(Math.round(window.scrollY)); // both are use same and it give scroll value of window 
        console.log(span.offsetTop);  // it  get value of how much distance from top and offsetLeft to get left distance
    })
}


{
    let main = document.querySelector('main');
    // main.addEventListener('scroll', function () {
    //     console.clear() 
    //     console.log(main.scrollTop);  // this value give div scroll value 
    // })
    console.log("main div Height : " + main.scrollHeight) // This is for get height of scroll div 
    console.log("main div Height : " + main.offsetHeight) // This is for get actuall height of div 
    console.log("main div Height : " + main.clientHeight) // This is for get real without padding and border value get actuall height of div 
}

{
    window.addEventListener('mousemove',(element)=>{
        console.clear() 
        let x = element.clientX;
        let y = element.clientY;
        console.log("x : " + x)
        console.log("y : " + y)
    })
}

{
    window.addEventListener('mousemove',(element)=>{
        console.clear() 
        let x = element.pageX;
        let y = element.pageY;
        console.log("x : " + x)
        console.log("y : " + y)
    })
}


{
    window.addEventListener('mousemove',(element)=>{
        console.clear() 
        let x = element.screenX;
        let y = element.screenY;
        console.log("x : " + x)
        console.log("y : " + y)
    })
}

{
    let span_div = document.querySelector('span');
    span_div.addEventListener('mousemove',(ele)=>{
        console.clear() ;
        let x = ele.offsetX;
        let y = ele.offsetY;
        console.log("x span : " + x)
        console.log("y span : " + y)
    });
}