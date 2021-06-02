var botaoAdicionar= document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector ("#mensagens-erro");
    mensagensErro.innerHTML = "";


});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // CRIA A TR
    pacienteTr.classList.add("paciente"); // Coloca a classe "paciente na TR"

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // para cada tr cria um filho com a função montaTr e alimenta com a classe "info-..."
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Informe o nome do paciente");
    }

    if (paciente.peso.length == 0){
        erros.push("Informe o peso do paciente");
    }

    if(paciente.altura.length == 0){
        erros.push("Informe a altura do paciente");
    }

    if (paciente.gordura.length == 0){
        erros.push("Informe a porcentagem de gordura");
    }
    
    if (!validaPeso(paciente.peso)){   
        erros.push("O peso é inválido!");
    }   
    
    if (!validaAltura(paciente.altura)){
        erros.push("A altura é inválida!");
    }

    return erros;
}