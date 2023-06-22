/*BORDE PERRITO */

let dog = document.getElementById("perrito");

dog.addEventListener("click", () => {
  dog.classList.toggle("borde");
});

/*STICKERS*/
let boton2 = document.querySelector("#boton2");
let mensaje2 = document.querySelector("#mensaje2");

boton2.addEventListener("click", () => {
  let card1 = document.querySelector("#miguel").value;
  card1 = Number(card1);
  let card2 = document.querySelector("#andres").value;
  card2 = Number(card2);
  let card3 = document.querySelector("#omar").value;
  card3 = Number(card3);

  cardsTotal = card1 + card2 + card3;
  if (cardsTotal <= 10) {
    mensaje2.innerHTML = "llevas " + " " + cardsTotal + " " + "Stikers";
  } else {
    mensaje2.innerHTML = "Llevas demasiados stikers";
  }
});

/*PASSWORD*/

let mensaje3 = document.querySelector("#mensaje3");
let boton3 = document.querySelector("#boton3");

boton3.addEventListener("click", () => {
  let num1 = document.querySelector("#bt-1").value;
  num1 = Number(num1);
  let num2 = document.querySelector("#bt-2").value;
  num2 = Number(num2);
  let num3 = document.querySelector("#bt-3").value;
  num3 = Number(num3);

  if (num1 == 9 && num2 == 1 && num3 == 1) {
    mensaje3.innerHTML = "El Password 1 es Correcto";
  } else if (num1 == 7 && num2 == 1 && num3 == 4) {
    mensaje3.innerHTML = "El Password 2 es Correcto";
  } else {
    mensaje3.innerHTML = "El password es incorrecto";
  }
});
