console.log(document.getElementsByClassName('carro'))

let mostra = document.getElementsByClassName('mostra')
let carrossel = document.getElementsByClassName('carro')
let setaEsq = document.getElementById('setaEsquerda')
let setaDir = document.getElementById('setaDireita')
let html = document.getElementsByTagName('html')[0]

let num = 0

function carro(prox){
    if (prox == true && num < 3){
        mostra[0].classList.remove('mostra')
        num += 1;
    }else if(prox == false && num > 0){
        mostra[0].classList.remove('mostra')
        num -= 1;
    }
    console.log(html)
    if(num == 0){
        html.classList.remove();
        html.classList.add('shrek');
    }else if(num == 1){
        html.classList.remove();
        html.classList.add('fiona');
    }else if(num == 2){
        html.classList.remove();
        html.classList.add('burro');
    }else if(num == 3){
        html.classList.remove();
        html.classList.add('gato');
    }
    carrossel[num].classList.add('mostra')
}

setaEsq.addEventListener('click', function(){
    carro(false);
});
setaDir.addEventListener('click', function(){
    carro(true);
});