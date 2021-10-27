//console.log()

const buttonOnClick = document.querySelector('#openModal')
const divWrapper = document.querySelector('.modal-wrapper')

const restart = document.querySelector('#resetModal')

buttonOnClick.addEventListener('click', changeModal)

function changeModal(){
    //console.log('test')
    divWrapper.classList.remove('invisible')
    }

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        divWrapper.classList.add('invisible')
    }
})


