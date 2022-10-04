
let btnNumeros = document.getElementsByClassName('botaoNumero');
let visor = document.getElementById('visor')
let btnOperadores = document.getElementsByClassName('botaoOperadores')

for(let botao of btnNumeros){
    botao.addEventListener('click', clica_Numero)
}

function clica_Numero(event){
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

for(let botao of btnOperadores){
    botao.addEventListener('click', clica_Operador)
}
function clica_Operador(event){
    visor.innerHTML = visor.innerHTML + event.target.innerHTML
}
let ac = document.getElementById('ac')
ac.addEventListener('click', limpa_Tudo)

function limpa_Tudo(event){
    visor.innerHTML = ""
}

let c = document.getElementById('c');
c.addEventListener('click', limpa_um)

function limpa_um(event){
    visor.innerHTML = visor.innerHTML.slice(0, visor.innerHTML.length - 1)
}

let body = document.getElementById('body');
body.addEventListener('keydown', pressionou_tecla);
function pressionou_tecla(event){
    if(event.key === '+'){
        visor.innerHTML = visor.innerHTML + '+'
    }
    else if(event.key === '-'){
        visor.innerHTML = visor.innerHTML + '-'
    }
    else if(event.key === 'x'){
        visor.innerHTML = visor.innerHTML + 'X'
    }
    else if(event.key === '/'){
        visor.innerHTML = visor.innerHTML + '÷'
    }
    else if(event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6'|| event.key === '7' || event.key === '8' || event.key === '9'){
        visor.innerHTML = visor.innerHTML + event.key
        
    }
    else if(event.keyCode === 8){
        limpa_um(event)
    }
    else if(event.keyCode === 46){
        limpa_Tudo(event)
    }
    else if(event.key === "m"){
        visor.innerHTML = 'monta cabeçudo'
    }
}