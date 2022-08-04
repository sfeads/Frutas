let grupoTarjetas1 = ["🍇","🍈","🍉","🍋","🍊","🍌","🍍","🍎","🥭"];
let grupoTarjetas2 = ["🍇","🍈","🍉","🍋","🍊","🍍","🍌","🍎","🥭"];


let todasLasTarjetas = grupoTarjetas1.concat(grupoTarjetas2);
function agregartitulos(){

//DOM
let root = document.querySelector("#root");



todasLasTarjetas.forEach(function(fruta){

//CREAR UN ELEMENTO DENTRO DEL DOM
let titulo = document.createElement("div");

//SE AGREGA CONTENIDO AL ELEMENTO
titulo.innerHTML = '<div class="tarjeta">' +
         fruta +
    '</div>';

// SE AGREGA AL DOM
root.appendChild(titulo);
} );



}

agregartitulos();