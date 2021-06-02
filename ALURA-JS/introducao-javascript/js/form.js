var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault(); /*event.preventDefault não executa o comportamento padrão da função*/

   var form = document.querySelector("#form-adiciona");
   
    //extraindo informações do paciente do form
   var paciente = obtemPacienteDoFormulario(form);
   
   var pacienteTr = montaTr(paciente);

   var erros = validaPaciente(paciente);
   

   if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return; // return sai da função e nao adiciona na tabela

   }

   var tabela = document.querySelector("#tabela-pacientes");
    
   tabela.appendChild(pacienteTr);

   form.reset();
});

function obtemPacienteDoFormulario (form){
    var paciente = {  // objeto que retorna os dados do paciente
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr (paciente){
    var pacienteTr = document.createElement("tr"); // cria a tr
    pacienteTr.classList.add("paciente"); // coloca uma classe na tr - classe paciente
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); /* appendChild - função significar "colocar como filho/anexar filho"  em cada tr */
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");
    return td;  
}

function validaPaciente(paciente){
    var erros = [];
    
    if (!validaPeso(paciente.peso))  {
        erro.push("O peso é inválido!");
    }
    
    if (!validaAltura(paciente.altura)){
        erro.push("A altura é inválida!");
    }

    return erros;
}