console.log('meu nome é Daniel')

let botaoAlerta = document.querySelector('#adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada');
let divTarefas=document.querySelector('#tarefas')

function criarTarefa(){
    let tarefa = `
    <div class="col-md-4">
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
    alert('Tarefa Criada: ' + inputTarefa.value)
}

botaoAlerta.addEventListener("click",criarTarefa);
