/*8. Create a page that has a container (div) with information and a button. 
Create a Javascript function that hides or shows the div that contains the information.*/

/*document.querySelector(".btn-information").addEventListener("click", function(){
    let text = document.querySelector(".divShow");
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
});*/

//----------------------------------------------------------------------------------------------------------------------------
/*9. Implement a calculator that allows entering two operands through two inputs 
and allows performing the basic operations 
(addition, subtraction, division, multiplication) 
chosen from a drop-down list (select). */

/*document.querySelector(".calculate").addEventListener("click",calculator);

function calculator(){
    document.querySelector(".calculate").addEventListener('click', () =>{
        let n1 = parseInt(document.querySelector(".number1").value);
        let n2 = parseInt(document.querySelector(".number2").value);
        let op2 = document.querySelector(".operation").value;
        let r;
        if(op2 == '+'){
            r = n1 + n2;
        }else if( op2 == '-'){
            r = n1 - n2;
        }else if(op2 == '*'){
            r = n1 * n2;
        }else if(op2 == '/'){
            r = n1 / n2;
        }
        document.querySelector(".r").innerHTML = r;
    });
} */
//----------------------------------------------------------------------------------------------------------------------------
/* 
10. Create a blank page, where the user can click anywhere 
and a colored DIV is automatically drawn at that exact position. 
*/

/*itemA.addEventListener("click", crearDiv);

function crearDiv (event) {
    let x = event.clientX;
    let y = event.clientY;
   
    let div = document.createElement("div");
    div.innerHTML="x";
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    itemA.append(div);
  
    

} */

//----------------------------------------------------------------------------------------------------------------------------

/* 11. Extend exercise 6 (6. Create a "To Do List" where each task is added from text input.)so that we can generate a personal card via the web. We must be able to add Name, Surname, Profession, Email, Telephone, Address. Once the data is submitted, it should appear on the page with the appearance and alignment of a business card. */

/*----------------------------------------------------------------------------------------------
document.querySelector(".btn-card").addEventListener("click", function(){
    let text = document.getElementById("card");
    text.classList.remove("auto");
    text.classList.add("cardStyle");
    
let namecard = document.querySelector(".name").value;
let surname = document.querySelector(".surname").value;
let profession = document.querySelector(".profession").value;
let email = document.querySelector(".email").value;
let telephone = document.querySelector(".telephone").value;
let addres = document.querySelector(".addres").value;
document.querySelector(".nameCard").innerHTML = `<p>Name:${namecard}</p>`;
document.querySelector(".surnameCard").innerHTML = `<p>Surname:${surname}</p>`;
document.querySelector(".professionCard").innerHTML = `<p>Profession:${profession}</p>`;
document.querySelector(".emailCard").innerHTML = `<p>Email:${email}</p>`;
document.querySelector(".telephoneCard").innerHTML = `<p>Telephone:${telephone}</p>`;
document.querySelector(".addresCard").innerHTML = `<p>Addres:${addres}</p>`;
}); */

/*--------------------------------------------------------------------------------------------------
12. Make a basic roulette with a random number between 0 and 36. The user must bet on a single number through an input. After pressing "Play!" it should show the number rolled, the number wagered, and whether you won or lost.*/


/*document.querySelector(".spin").addEventListener("click", function(){
let chose = document.querySelector(".input-chose").value;
document.querySelector(".chose").innerHTML += chose;
let random = Math.round(Math.random(0)*37);
document.querySelector(".result").innerHTML += random;
let warning = document.querySelector(".warning");


if(chose != random){
   warning.innerHTML = "<p>SORRY, YOU LOST </p>"
}else{
    warning.innerHTML = "<p>CONGRATULATIONS YOU WIN!</p>"
}


})*/




         
       
    

