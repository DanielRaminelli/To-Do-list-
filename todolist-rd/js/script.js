console.log('meu nome é Daniel')

let botaoAlerta = document.querySelector('#adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada');
let divTarefas=document.querySelector('#tarefas')

function criarTarefa(){
    if (inputTarefa.value.trim()==''){
        inputTarefa.style.border = '2px solid red'
        return alert ('Você deve digitar uma tarefa primeiro')
    }
    let tarefa = `
    <div class="col-md-4 mb-4 mt-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${inputTarefa.value}
            </div>
            <div class="botao-tarefa">
                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
    </div>
    `
    divTarefas.innerHTML += tarefa
    alert('Tarefa Criada: ' + inputTarefa.value)
    inputTarefa.value = ''
}

botaoAlerta.addEventListener("click",criarTarefa);
