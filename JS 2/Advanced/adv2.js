/*6. Modify the task list so that in addition to having a limit,
 you cannot add repeated tasks.*/

/* let btnAgregar = document.querySelector("#btn-task");
btnAgregar.addEventListener("click", add);
let tasks = [];
let limit = 10;

   show();

function add(){
    let input = document.querySelector('#input-task').value;

       
         if(tasks.length < limit){
             let existTask = exists(input)
        if(input != "" && existTask == false){
            
                tasks.push(input)
        }else{
            alert("You should add a task or already exists")
        }
    }else{
        alert("You cannot add more tasks")
    }
     show();
    }

    function exists(Atask){
        for (let index = 0; index < alumnos.length; index++) {
           let taskInArray = tasks[index];{
               if(Atask == taskInArray){
                   return true;
               }
           }
            
        }

        return false;
        
    }
    function show(){
    let list = document.querySelector('ul');
    list.innerHTML = " ";


    for (let index = 0; index < tasks.length; index++) {
        list.innerHTML += `<li> ${tasks[index]}</li>`;
        
        
    }

    let lng = tasks.length;
    list.innerHTML += `<li>Amount of Tasks:${lng}</li>`
}*/

/*7. Create an image gallery. It must have previous and next buttons and display the images cyclically. 
Every 5 seconds the image should be changed automatically.*/

/*let container = document.getElementById("container");
let btnLeft = document.getElementById("btnL");
let btnRight = document.getElementById("btnR");

let margin = -100;
let max = margin*2;

btnRight.addEventListener("click", ()=>{
    let id = setInterval(()=>{
        margin --;
        container.style.marginLeft=`${margin}%`;

        if(margin <= max){
            clearInterval(id);

            let child = container.child[0];
            let clone = child.cloneNode(true);
            container.appendChild(clone);
            container.removeChild(child);

            margin=-100;

            container.style.marginLeft=`${margin}%`;

        }

    },5)
})

btnRight.addEventListener("click", ()=>{
    let id = setInterval(()=>{
        margin ++;
        container.style.marginLeft=`${margin}%`;

        if(margin >= 0){
            clearInterval(id);

            let child = container.child[2];
            let clone = child.cloneNode(true);
            container.insertBefore(clone,container.child[0]);
            container.removeChild(child);

            margin=-100;

            container.style.marginLeft=`${margin}%`;

        }

    },5)
})*/

/*8.Create a student's final grade calculator. The system must allow entering the notes from a text input (one by one, without limits) 
and through another button the student's average must be reported.*/

const notesList = document.querySelector(".studNotes");
const btnNote = document.querySelector(".btn-note");
const btnFinalGrade = document.querySelector(".finalGrade");
const notes = [];

function sum() {
    const newArray = notes.reduce((acc,el) => acc + el,0)
    console.log(newArray);
    let result = parseInt(newArray/(notes.length));
    console.log(result);
    document.querySelector(".finalDiv").innerHTML = result;
}

btnNote.addEventListener("click", ()=>{
    let input = document.querySelector(".notes-input").value;
    notes.push(parseInt(input));
    
    console.log(notes);
    sum();
    notesList.innerHTML=notes;
    
});