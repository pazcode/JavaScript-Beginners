/*1. Rewrite exercise 3 of Practical 02 JS but using anonymous functions to be able to pass parameters.
 Which of the two ways do you think is better?

TP 2 Exercise 3: Create 3 buttons of different color. 
Add the functionality so that a message is displayed in a paragraph 
that warns which of the buttons was the last clicked.*/


/*document.getElementById("violet").addEventListener("click", lastClick);
document.getElementById("yellow").addEventListener("click", lastClick);
document.getElementById("orange").addEventListener("click", lastClick);



function lastClick(id){
    document.getElementById("lastBtnAlert").innerHTML = "The last clicked button was the  " + this.id;
}*/


/*2. Create a counter that independently counts the clicks that are made on three buttons.*/

const btn= document.querySelectorAll('button');
for (var i = 0; i < btn.length; i += 1) {
    btn[i].onclick = function(e) {
        let selector = document.getElementById(this.id);
        let counter = selector.getAttribute('counter'); 
        let name = selector.innerHTML;
        

        if(counter == 0) {
          counter = 1;
          
        }else{
          counter = Number(counter) + 1;
        }
        selector.setAttribute('counter', counter);
        
   
         document.querySelector(".btn-msg").innerHTML = `button ${name} was clicked ${counter} times`;
    };
    
} 

/*3. Create a toggle button that applies a class to all titles, 
and by pressing it returns to the original appearance.*/

document.getElementById("btn-appearance").addEventListener("click",()=>{

document.getElementById("titles").classList.toggle('styles');

});




