// Manipulando conteúdo

//const element = document.querySelector('input')
//const element = document.querySelector('h1')
// textContent
//element.textContent = "Olá Devs!"
//element.textContent += " Olá Devs!"

// innerText
//element.innerText = "Hello Devs!"

// innerHTML
//element.innerHTML ="Olá Devs! <small>!!!</small>"


// value
//element.value = "Valor que eu quiser" // Populado
//console.log(element.value)
//element.value = "outro valor"
//console.log(element.value)
//--------------------------------------

// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID =  document.querySelector('#header')

console.log(headerID)
console.log(headerID.getAttribute('id'))

header.removeAttribute('id')