/*1. Show an alert when loading a page
● Make it a fixed text
● Let there be two variables name and surname concatenated, 
showing in the message: Name: (value_name) Surname: (value_surname)*/

/*document.addEventListener("DOMContentLoaded", function () {

let name = "Maria Paz";
let surname = "Lumovich";

alert(`Hello ${name} ${surname} !`);

}) */

/* 2. Write an HTML with three empty divs (without content) and give it a text from Javascript (when loading the page). 
Reflect on the differences in doing it in HTML or Javascript.
  a- Is it possible from JS to insert different paragraphs inside the div?*/

let tresDivs = document.querySelectorAll("div .div");
for (var i = 0; i < tresDivs.length; i++) {
  tresDivs[i].innerHTML = "HOLA MUNDO!";
}

/*3. Show the same message from point one, but clicking from a button*/

document.getElementById("msg-btn").addEventListener("click", function () {
  let name = "Maria Paz";
  let surname = "Lumovich";

  alert(`Hello ${name} ${surname} !`);
});


/*4. Create 3 buttons of different color. Add the functionality so that a message is displayed in a paragraph that warns which of the buttons was the last clicked. */

document.getElementById("violet").addEventListener("click", lastClick);
document.getElementById("yellow").addEventListener("click", lastClick);
document.getElementById("orange").addEventListener("click", lastClick);



function lastClick(id){
    document.getElementById("lastBtnAlert").innerHTML = "The last clicked button was the  " + this.id;
}



