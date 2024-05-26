
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

