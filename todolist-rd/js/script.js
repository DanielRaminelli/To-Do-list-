console.log('meu nome é Daniel')

let botaoAlerta = document.querySelector('#adicionar-tarefa')

function criarTarefa(){
    alert('tarefa criada')
}

botaoAlerta.addEventListener("click",criarTarefa)