// Eventos

//const h1 = document.querySelector('h1');

//h1.addEventListener('click', print) // Linka um evento com a função do js

//h1.onclick = print  
//h1.onclick = function(){console.log('outro momento')} // se usado onclick mais de uma vez, o que vier por último será considerado

//function print(){
//   console.log('print')}

//h1.addEventListener('click', function() {console.log('segundo evento')} )


//const input = document.querySelector('input')
// input.onkeydown = function(){
    // console.log('rodei')}
    // input.onkeyup = function(){ //quando soltar a telca roda a function
        // console.log('rodei')}
        // input.onkeypress = function(){ //qualquer clique dispara a function
            // console.log('rodei')}


// Argument event
const input = document.querySelector('input')

input.onkeypress = function(event){
    //console.log(event)
    //console.log(event.key) // pega a key digitada no input
    console.log(event.currentTarget.value) // pega o valor que está sendo digitado
}
