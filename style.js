// Alterando estilos
const element = document.querySelector('body')

//element.style.backgroundColor = color="red"

// classList
element.classList.add('active', 'green')
console.log(element.classList)

//element.classList.remove('active')
element.classList.toggle('active') // O toggle ativa ou desativa a classe
