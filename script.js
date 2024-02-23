let btninput= document.querySelector(".btninput");
let myinput=document.querySelector(".input");
let myul=document.querySelector(".todo-ul");


btninput.addEventListener('click',addTask);
// event listener
// functions
function addTask(e){
    e.preventDefault();
    // console.log("Hello iam input");
    let val=myinput.value;
    // console.log(val);
    // create li
    let liCreate=document.createElement("li");
    liCreate.classList.add("todo-li");
    // create div
    let divCreate=document.createElement("div");
    divCreate.classList.add("todo-item");
    // add input val to div
    divCreate.innerHTML=val;
    // create button1
    let buttonCreate = document.createElement("button");
    buttonCreate.classList.add("btn1");
    buttonCreate.innerHTML= '<i class="fa-solid fa-check"></i>';
    // create button2
    let butoncreate2=document.createElement("button");;
    butoncreate2.classList.add("btn2");
    butoncreate2.innerHTML='<i class="fa-solid fa-trash"></i>';
    // add div&2button in li
    liCreate.appendChild(divCreate);
    liCreate.appendChild(buttonCreate);
    liCreate.appendChild(butoncreate2);
    // add li in ul
    myul.appendChild(liCreate);
    // remove input value
    myinput.value= '';

}

myul.addEventListener('click',addcomplete);
function addcomplete(e){
    if(e.target.classList=='btn1'){
        let par=e.target.parentElement;
        par.classList.toggle("complete");
    }else if(e.target.classList=='btn2'){
        let par=e.target.parentElement;
        par.classList.toggle("fall");
        setTimeout(() => {
            par.remove();
        }, 1000);
    }
    // e.target.classList='btn1'
    
    
}
