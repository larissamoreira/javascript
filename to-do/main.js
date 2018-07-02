let list = document.querySelector('#list');
const btnInserir = document.querySelector('#btn');
let task = document.querySelector('textarea');
let alerta = document.querySelector('#alerta');
let prioridade = document.querySelector('#prioridade');

btnInserir.addEventListener('click', function () {
    addTask();
})

task.addEventListener('keypress', function () {
    let inputLength = task.value.length;
    let remainLetters = 40 - inputLength;

    if (remainLetters <= 5) {
        alerta.classList.add('yellow-alert');
    }

    if(remainLetters < 0) {
        alerta.classList.remove('yellow-alert');
        alerta.classList.add('red-alert');
    }

    alerta.innerHTML = `${remainLetters} letras.`;
})

let addTask = () => {
    let input = task.value;
    let type = '';
    prioridade.checked === true ? type = 'afterbegin' : type = 'beforeend'
    list.insertAdjacentHTML(type, `<li><span>${input}</span><span>&times</span></li>`);
    prioridade.checked = false;
}