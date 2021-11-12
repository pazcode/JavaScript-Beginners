/*4. Create a list of tasks read from an input. 
Only a maximum of 10 tasks should be allowed. 
Use an array to separate the model from the view.*/
let limit = 10;
let tasks = [];

let input = document.querySelector(".input-task").value;
document.querySelector(".btn-task").addEventListener("click", ()=>{

    if(tasks.length<limit){
        tasks.push(input)
    }else{
        alert("Only 10 tasks allowed")
    }


    show();

})

function show(){
    let list = document.querySelector(".tasks-list");
    for (let i = 0; tasks < tasks.length; i++) {
        list.innerHTML += `<li> ${tasks[i]} </li>`
       
    }
}

/*5. Create a See More button type that displays more text content. 
The button must be a toggle type that shows and hides the expanded information. 
The button must be able to be reused in two parts of the site, 
expanding the specific information of the sections where it is used. 
It is important to reuse the created functions.*/

/*let text = "HOLA SOY UN TEXTO"
let btn = document.querySelector(".btn-seemore");
btn.addEventListener("click",(e) =>{
     show(text)
});



function show(e){


    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = e;
    div.appendChild(p);
    let div1 = document.querySelector(".div1");
    div1.appendChild(div)
   
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
}
*/


  








   









 




   
  
