
function lePaciente () {
    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");
    
    var paciente = { 
                    nome: inputNome.value,
                    peso: inputPeso.value,
                    altura: inputAltura.value
                    };
                   return paciente;
    }

function calculaIMC(peso, altura) {//nome da function e quais informações que vai precisar
    var imc = peso / (altura**2); //processamento
    return imc; //retorno
}

function verificaIMC (imc) {//nome da function e quais informações que vai precisar
    var situacao = null;  //processamento
    if (imc < 18.5) {
        situacao = 'Magreza'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = "Normal"
    } else {
        situacao = "Sobrepeso"
    }
    return situacao; //retorno
}

function mostraPaciente(paciente){
    var imc = calculaIMC(paciente.peso, paciente.altura);
    var situacao = verificaIMC (imc);

    var spanNome = document.getElementById("nome");     //<span id="nome"></span>
    spanNome.innerHTML = paciente.nome;
    var spanPeso = document.getElementById("peso");     //<span id="peso"></span>
    spanPeso.innerHTML = paciente.peso;
    var spanAltura = document.getElementById("altura"); //<span id="altura"></span>
    spanAltura.innerHTML = paciente.altura;
    var spanImc = document.getElementById("imc");      //<span id="imc"></span>
    spanImc.innerHTML = imc.toFixed(2);
    var spanSituacao = document.getElementById("situacao");
    spanSituacao.innerHTML = situacao;
}


function geraRelatorio(pacientes){
var listaNumerada = document.getElementById("listaNumerada");
listaNumerada.innerHTML = ""; //apaga lista caso tiver pacientes
pacientes.forEach((paciente)=> {
var imc = calculaIMC (paciente.peso,paciente,altura);
var sit = verificaIMC (imc);
listaNumerada.innerHTML += `<li> ${paciente.nome} - Situação: ${sit} </li>`;
});
}


