console.log('js/main.js');

const tabela = document.getElementById('table0');
const button = document.getElementById('gerar');
const cabecalho = document.getElementById('cabecalho');
const titulo = document.getElementById('titulo');
const dados = document.getElementById('dados');
const fi = document.getElementById('Fi');
const fai = document.getElementById('FAi');
const fr = document.getElementById('Fr');
const far = document.getElementById('FAr');
// Script here \/;

button.addEventListener('click', function() {
    let tabfi = [];
    let tabfai = [];
    let tabfr = [];
    let tabfar = [];
    const event = tabela.children.length;
    /* for (let i=0; i < event; i++) {
        document.querySelector('#table0'); this.children[0];
    } estava dando problema com o this.children[0],
     entao comentei para poder testar o resto do codigo*/
    function calcfai() {
        const vet = [];
        let aux = 0;
        for (let i = 0; i < dados.value.split(' ').length; i++) {
            aux += parseInt(dados.value.split(' ')[i]);
            vet.push(aux);
            // console.log(tabfai);
        }
        return vet;
    }

    function calcfr() {
        const vet = [];
        const aux2 = calcfai();
        for (let i = 0; i < dados.value.split(' ').length; i++) {
            const aux3 = ((parseInt(dados.value.split(' ')[i]) * 100)
             / aux2[aux2.length - 1]);
            vet.push(aux3);
        }
        return vet;
    }
    if (fi.checked === true) {
        tabfi = (dados.value.split(' '));
    } else {
        tabfi = false;
    }

    if (fai.checked === true) {
        tabfai = calcfai();
        console.log(tabfai);
    } else {
        tabfai = false;
    }

    if (fr.checked === true) {
        tabfr = calcfr();
    } else {
        tabfr = false;
    }

    if (far.checked === true) {
        const vetaux = calcfr();
        let aux = 0;
        for (let i = 0; i < vetaux.length; i++) {
            aux += vetaux[i];
            tabfar.push(aux);
        }
    } else {
        tabfar = false;
    }

    // Chamar função das frequencias e concatenar os dados na tabela.
});
