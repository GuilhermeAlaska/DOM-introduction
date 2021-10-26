// Navegando pelos elementos
// parentNode parentElement 


// const body = document.querySelector('body')


// console.log(body.parentNode)
// console.log(body.parentElement)


// const element = document.querySelector('h1')
// console.log(element.parentElement)


// Navegando pelos elementos

// childNodes children
//const el = document.querySelector('body')


//console.log(el.childNodes)
//console.log(el.children) // Não leva em conta espaços vazios


// firstChild firstElementChild
//console.log(el.firstChild)
//console.log(el.firstElementChild)


// lastChild lastElementChild
//console.log(el.lastChild)
//console.log(el.lastElementChild)


// nextSibling nextElementSibling
//console.log(el.nextElementSibling)
//const el = document.querySelector('header')
//console.log(el.nextSibling)


// previousSibling previousElementSibling
//const el = document.querySelector('body script')
//console.log(el.previousSibling)
//console.log(el.previousElementSibling)

// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// append prepend
const body = document.querySelector('body')

//body.append(div) / Adiciona depois
body.prepend(div) // Adiciona antes