// 1) Utiliza un bucle for para imprimir los números del 1 al 10 en la consola.

const containerLi = document.getElementById('listaNumeros')

for (let i = 0; i <= 10; i++){
    console.log(i)
    
    let newElement = document.createElement('li')
    newElement.innerHTML = i

    containerLi.appendChild(newElement)

    
}