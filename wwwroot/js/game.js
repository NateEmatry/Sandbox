function sayHello() {
    console.log("Hello game!");
}

function keyDownJS(event) {

    switch (event.keyCode)
    {
        // case 37:
        case 38:
        // case 39:
        case 40:
        {
            event.preventDefault();
        } break;
            
        default: break;
    }

    console.log("User pressed " + event.keyCode);
}