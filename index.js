const preto = document.querySelector('.preto');
const azul = document.querySelector('.azul');
const verde = document.querySelector('.verde');

const carro = document.querySelector('.carro');

function changeColor(cor){
    if(cor === 'preto'){
        carro.src = './img/preto.png';
    }else if (cor === 'azul'){
        carro.src = './img/azul.png';
    }else if (cor === 'verde'){
        carro.src = './img/verde.png'
    }
}

preto.addEventListener('change', () => changeColor('preto'));
azul.addEventListener('change', () => changeColor('azul'));
verde.addEventListener('change', () => changeColor('verde'));