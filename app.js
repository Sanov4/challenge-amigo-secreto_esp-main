const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if(inputAmigo.value == ""){
        alert("input sin información. Escriba algo, por favor :)");
    }else{
        listaAmigos.push(inputAmigo.value);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}<li>`;
    }
};

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}<li>`;
    
}