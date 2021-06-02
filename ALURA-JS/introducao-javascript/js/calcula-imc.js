var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i <pacientes.length; i++){ /*.lenght é a proproedade onde mostra o tamanho do array. */
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso); // true or false
    var alturaEhValida = validaAltura(altura)
    
    if (!pesoEhValido){ // ! é a negação da função
        console.log("Peso Inválido")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){ // ! é a negação da função
        console.log("Altura Inválido")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso (peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc (peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
