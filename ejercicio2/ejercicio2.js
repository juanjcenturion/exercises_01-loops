const containerLi = document.getElementById('listaNumeros')

let newElement = document.createElement('li')
let numero = 1;
let suma = 0;

while (numero <= 100){
    suma += numero;
    numero ++;
}

newElement.innerHTML = suma;
containerLi.appendChild(newElement);
