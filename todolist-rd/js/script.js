console.log('meu nome é Daniel')

let botaoAlerta = document.querySelector('#adicionar-tarefa')
let inputTarefa = document.querySelector('#tarefa-digitada')

function criarTarefa(){
    alert('Tarefa Criada: ' + inputTarefa.value)
}

botaoAlerta.addEventListener("click",criarTarefa);
