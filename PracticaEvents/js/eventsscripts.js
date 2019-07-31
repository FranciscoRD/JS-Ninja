// propagacion de eventos Bubbling y Capturing
    ul = document.getElementById("list");;
    li = document.querySelector("#list li");
    //Bubling
        /*
        ul.addEventListener("click", function(event){
            console.log("Clicked on ul");
        });
        li.addEventListener("click",function(event){
            console.log("Clicked li");
        });
        */
    //Capturing
        /*
        ul.addEventListener("click",function(event){
            console.log("Clicked on UL");
        },true);
        li.addEventListener("click",function(event){
            console.log("Clicked on LI");
        },true);
        */
    // Capturing and Bubbling
        /*
        ul.addEventListener("click",function(event){
            console.log("Clicked on ul - Capturing");
        },true);
        li.addEventListener("click",function(event){
            console.log("Clicked on li - Capturing");
        },true);
        ul.addEventListener("click",function(event){
            console.log("Clicked on UL - Bubbling");
        },false);
        li.addEventListener("click",function(event){
            console.log("Clicked on LI - Bubbling");
        },false);
        */
    // Stopping Propagation - Bubbling
        /*
        li.addEventListener("click",function(event){
            console.log("Clicked on li - Bubbling and Stopping propagation");
            event.stopPropagation();
        },false);
        ul.addEventListener("click",function(event){
            console.log("Clicked on UL - Bubbling");
        },false);
        */
    ul.addEventListener("click",highlight);


// Eventos de teclas y mouse
    addEventListener("keydown",highlight);
    addEventListener("keypress", function (event) {
        console.log(String.fromCharCode(event.charCode) + " character. Codigo: "+ event.charCode);
    });
    addEventListener("keydown",function(event){
        if(event.keyCode == 32 && event.ctrlKey)
            this.console.log("Action Cancelled!");
    });
    addEventListener("keypress",function(event){
        if (event.shiftKey) {
            this.console.log("A shifty Click!");
        }
    })
    addEventListener("touchend",function(){
        this.console.log("Thank you");
    });
    /*
    addEventListener("keyup",function stop(event){
        var date = new Date;
        this.console.log("You stopped pressing the key on "+date);
    });
    */


// Eventos del parrafo Broken
    var broken = document.getElementById("broken");
    broken.addEventListener("click",function(event){
        event.preventDefault();
        console.log("Broken Link");
    });
// Eventos del parrafo Once
    once = document.getElementById("once"); 
    once.addEventListener("click",remove);
        function remove(event){
            console.log("Enjoy this while it last!");
            once.style.backgroundColor = "pink";
            once.removeEventListener("click",remove);
        }
// Eventos del parrafo Hover Over Me
    var mouse = document.getElementById("mouse");
        mouse.addEventListener("mouseover",highlight);
        mouse.addEventListener("mouseout",highlight);
        // mouse.addEventListener("mousemove",function(){console.log("Moviste el mouse");});
// Eventos del parrafo Double Click On Me
    var dblClick = document.getElementById("dblclick");
        dblClick.addEventListener("dblclick",highlight);
        function highlight(event){
            event.target.classList.toggle("highlight");
        }
//Eventos del parrafo Click On Me
    var click = document.getElementById("click");
        click.addEventListener("mousedown",function() {console.log("down")});
        click.addEventListener("click",function(){console.log("click")});
        click.addEventListener("mouseup",function(){console.log("up")});


// doSomething V1.0 - V2.0 - V3.0
// addEventListener("click",doSomething);
// doSomething V3.0, Posicion de clicks
/*
function doSomething(event){
    console.log("screen: ("
    + event.screenX + "," + event.screenY +"),page:("
    + event.pageX + "," + event.pageY + "),client: ("
    + event.screenX + "," + event.screenY +")");
};
*/
// doSomething V 2.0, Eventos basicos
/*
function doSomething(){
    // Indica que tipo de evento se genero
    // console.log(event.type);
    
    // Indica que parte del documetno se le dio clcik
    // console.log(event.target);

    // Indica que boton fue presionado, solo reconoce boton izq del mouse 
    // console.log(event.which); 
}
*/
// doSomething V 1.0
/*
function doSomething(){
    // Genera un mensaje en la consola
    console.log("Diste Click!"); 
}
*/