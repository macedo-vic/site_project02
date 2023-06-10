const form = document.getElementById('form-atividade');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O nome ${inputNomeContato.value} já está inserido.`)
    } else if (nomes.includes(inputNomeContato.value)) {
        alert(`O número ${inputNumeroContato.value} já está inserido.`)
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já está inserido.`)
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
