
/* 1- What is JSON and what is its structure like? What is it used for in JS?*/

/* 2- How do you get a single element from the DOM? How do you get multiple elements from the DOM?*/

/* 3- In JS, what are the differences when assigning variables with let and var? */

/* 4- What are arrow functions?*/

/* 5- Using this JSON object to store a team and its data in the leaderboard 
(points, games played, won, tied, lost, points):
A- Analyze what console.log displays (team):

{nombre: "Barcelona FC", puntos: 98, pj: 35, pg: 32, pe: 2, …}


B- Show team statistics by console*/

let equipo = {
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
}

/*let statisGamesWon = equipo["pg"]/equipo["pj"];
console.log(statisGamesWon);
let statisScore = equipo["puntos"] / (3 * equipo["pj"]);
console.log(statisScore); */

/* 6- Create an array of JSON objects that is the entire Spanish soccer position table that includes the teams.
 It can be only the first 5 teams.*/

/* A-Analyze what console.log (table) displays
   B-Show by console the statistics of the first team
   C-Show by console the number of computers in the table.
   D-Print using the DOM the difference in points between the first and second teams in the table.*/


 let tabla = [
    {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    },
    {
        "nombre": "Atlético de Madrid", 
        "puntos": 74,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5, 
    },
    {  "nombre": "Elche", 
       "puntos": 20,
       "pj": 35,
       "pg": 10,
       "pe": 9,
       "pp": 9, 
    },
    { "nombre": "Gtafe", 
      "puntos": 25,
      "pj": 35,
      "pg": 2,
      "pe": 8,
      "pp": 15, 
    },
    { "nombre": "Atlético de Madrid", 
      "puntos": 55,
      "pj": 35,
      "pg": 35,
      "pe": 3,
      "pp": 2, }
];

/* 7- Create three buttons that allow you to count elements on a page.
The first, must count the total number of paragraphs "<p>"
The second,is the number of items in a list with id "list-menu"
The third, the total of divs with the class "news"

Investigate the differences between: getElementByID (),
 getElementsByClassName (),
  getElementsByAttribute () vs querySelectorAll ();**/

 

  let ps = document.getElementsByTagName("p");
  let countPdiv = document.querySelector(".countPdiv");
  document.querySelector(".btn-countP").addEventListener("click", ()=>{

    countPdiv.innerHTML += ps.length;
  })
  document.querySelector(".btn-countMenuItems").addEventListener("click", ()=>{
    var divMneu = document.querySelector(".countMenuDiv");
    var ul = document.getElementById("list-menu");
    var i=0, itemCount =0;
    while(ul.getElementsByTagName('li') [i++]) itemCount++;

    divMneu.innerHTML += itemCount;
    
    })

    let news = document.getElementsByClassName("news");
    let newsDiv = document.querySelector(".newsDiv");

    document.querySelector(".btn-news").addEventListener("click", ()=>{

      newsDiv.innerHTML += news.length;

    })


    
/* 8-Implement a button that each time it is clicked deletes a paragraph from the page,
 starting from the last to the first.*/
var dom = document.getElementsByTagName("body")[0];
var parrafos = document.getElementsByTagName("p");

document.querySelector(".btn-deleteParagraph").addEventListener("click", ()=>{
  for (let i = 0; i < parrafos.length; i++) {
    
    dom.removeChild(parrafos[i]);
  }
    
     
})
 

/* 9-For exercise 5:
Make a button that goes through and prints the leaderboard in the HTML.
Insert a new team (with all its data) from a form. Once entered, the table on the page must be updated.*/

/*document.addEventListener("DOMContentLoaded",charge());

let teams = [{
nombre: "Barcelona FC",
pe: 2,
pg: 32,
pj: 35,
pp: 1,
puntos: 98},]


  
  table.innerHTML += `<table>
  
  <tr>
    <th>Nombre:</th>
    <th>P. Empatados:</th>
    <th>P. Ganados:</th>
    <th>P. JUgados:</th>
    <th>P. Perdidos:</th>
    <th>Puntos:</th>
  </tr>
  <tr>
    <td>${teams[i].nombre}</td>
    <td>${teams[i].pe}</td>
    <td>${teams[i].pg}</td>
    <td>${teams[i].pj}</td>
    <td>${teams[i].pp}</td>
    <td>${teams[i].puntos}</td>
  </tr>
  </table>` */



  








  

