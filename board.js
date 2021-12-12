            let canvasBoard = document.querySelector("canvas");
            let body = document.querySelector("body");
            let tool = canvasBoard.getContext("2d");
            let rectTool = document.querySelector("#rect");
            let lineTool = document.querySelector("#line");
            let pencilTool = document.querySelector("#pencil");
            let eraserTool = document.querySelector("#eraser");
            let options = document.querySelectorAll(".sizes");
            canvasBoard.height = window.innerHeight;
            canvasBoard.width = window.innerWidth;
            let boardTop = canvasBoard.getBoundingClientRect().top;

            let boardLeft = canvasBoard.getBoundingClientRect().left;
            let cTool = "pencil";
            let green = document.querySelector(".green");
            let blue = document.querySelector(".blue");
            let orange = document.querySelector(".orange");
            let sizes = document.querySelectorAll(".sizes");
            let size1 = document.querySelector(".size1");
            let size2 = document.querySelector(".size2");
            let size3 = document.querySelector(".size3");
            let size4 = document.querySelector(".size4");
            let close = document.querySelector(".close");
            let stick_note = document.querySelector(".sticky-note");
            let minimise = document.querySelector(".minimise");
            let textarea = document.querySelector(".textarea");
            let navbar = document.querySelector(".navbar")
            let notes = document.querySelector(".notes")
            let click = "closed";
            let size = 5;
            sizes[0].addEventListener("click",function(e){
                let elems = ["size1","size2","size3","size4"]
                allClass = e.target.classList;
                firstClass = allClass[0];
                // console.log(firstClass)
                test = elems.includes(firstClass);
                if (test){
                    if (firstClass == "size1"){
                        size = 5;
                    }
                    else if (firstClass == "size2"){
                        size = 10;
                    }
                    else if (firstClass == "size3"){
                        size = 15;
                    }
                    else if (firstClass == "size4"){
                        size = 20;
                    }
                }
                console.log(size)
                tool.lineWidth = size;
            })
            sizes[1].addEventListener("click",function(e){
                let elems = ["size1","size2","size3","size4"]
                allClass = e.target.classList;
                firstClass = allClass[0];
                // console.log(firstClass)
                test = elems.includes(firstClass);
                if (test){
                    if (firstClass == "size1"){
                        size = 5;
                    }
                    else if (firstClass == "size2"){
                        size = 10;
                    }
                    else if (firstClass == "size3"){
                        size = 15;
                    }
                    else if (firstClass == "size4"){
                        size = 20;
                    }
                }
                tool.lineWidth = size; 
            })
            sizes[2].addEventListener("click",function(e){
                let elems = ["size1","size2","size3","size4"]
                allClass = e.target.classList;
                firstClass = allClass[0];
                test = elems.includes(firstClass);
                if (test){
                    if (firstClass == "size1"){
                        size = 5;
                    }
                    else if (firstClass == "size2"){
                        size = 10;
                    }
                    else if (firstClass == "size3"){
                        size = 15;
                    }
                    else if (firstClass == "size4"){
                        size = 20;
                    }
                }
                tool.lineWidth = size;
            })
            sizes[3].addEventListener("click",function(e){
                let elems = ["size1","size2","size3","size4"]
                allClass = e.target.classList;
                firstClass = allClass[0];
                test = elems.includes(firstClass);
                if (test){
                    if (firstClass == "size1"){
                        size = 5;
                    }
                    else if (firstClass == "size2"){
                        size = 10;
                    }
                    else if (firstClass == "size3"){
                        size = 15;
                    }
                    else if (firstClass == "size4"){
                        size = 20;
                    }
                }
                tool.lineWidth = size;
            })

            orange.addEventListener("click",function(){
                tool.strokeStyle = "orange";
                // console.log('hi')
            })
            blue.addEventListener("click",function(){
                tool.strokeStyle = "blue";
            })
            green.addEventListener("click",function(){
                tool.strokeStyle = "green";
            })
            rectTool.addEventListener("click",function(){
                if (cTool == "rectTool"){
                    options[2].style.display = "flex";
                    tool.lineWidth = size;
                }
                else{
                    cTool = "rectTool"
                    tool.strokeStyle = "black";
                    for (let i=0;i<4;i++){
                        options[i].style.display= "none";
                    }
                }
                
            })
            notes.addEventListener("click",function(){
                stick_note.style.display= "inline";
            })
            close.addEventListener("click",function(){
                stick_note.style.display= "none";
                click = "closed"
            })
            minimise.addEventListener("click",function(){
                if (click == "minimise"){
                    textarea.style.display = "flex";
                }
                else{
                    textarea.style.display = "none";
                    click = "minimise"
                }
            })
            lineTool.addEventListener("click",function(){
                if (cTool == "lineTool"){
                    options[3].style.display = "flex";
                    tool.lineWidth = size;
                }
                else{
                    cTool = "lineTool"
                    tool.strokeStyle = "black";
                    for (let i=0;i<4;i++){
                        options[i].style.display= "none";
                    }
                }
            })
            pencilTool.addEventListener("click",function(){
                if (cTool == "pencil"){
                    options[1].style.display = "flex";
                    tool.strokeStyle = "black";
                }
                else{
                    cTool = "pencil"
                    for (let i=0;i<4;i++){
                        options[i].style.display= "none";
                    }
                }
            })
            eraserTool.addEventListener("click",function(){
                if (cTool == "eraser"){
                    options[0].style.display = "flex";
                    tool.lineWidth = size;
                }
                else{
                    cTool = "eraser"
                    tool.strokeStyle = "white";
                    for (let i=0;i<4;i++){
                        options[i].style.display= "none";
                    }
                }
            })
            
            let ix,iy,fx,fy;
            let clicked = false;
            body.addEventListener("mousedown",function(e){
                ix = e.clientX-boardLeft;
                iy = e.clientY-boardTop;
                if (cTool == "pencil"){
                    tool.beginPath();
                    tool.moveTo(ix,iy);
                    clicked = true;
                }
                else if (cTool == 'eraser'){
                    tool.beginPath();
                    tool.moveTo(ix,iy);
                    clicked = true;
                }
            })
            body.addEventListener("mouseup",function(e){
                if (cTool == "pencil"){
                    clicked = false;
                }
                else{
                fx = e.clientX-boardLeft;
                fy = e.clientY-boardTop;
                let width = fx - ix;
                let height = fy - iy
                if (cTool == "rectTool"){
                    tool.strokeRect(ix,iy,width,height);
                }
                else{
                    tool.beginPath();
                    tool.moveTo(ix,iy);
                    tool.lineTo(fx,fy);
                    tool.stroke();
                }}
            })
            body.addEventListener("mousemove",function(e){
                if (clicked == false || cTool != "pencil"){

                    return;
                }
                    fx = e.clientX;
                    fy = e.clientY-boardTop;
                    tool.lineTo(fx,fy);
                    tool.stroke();
                    ix = fx;
                    iy = fy
            })