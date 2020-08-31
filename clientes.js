const infoClientes = [
    {
      cpf: 18875539081,
      nome: "Patricia"
    },
    {
      cpf: 18875539081,
      nome: "Elena"
    },
    {
      cpf: 18875539081,
      nome: "Ronaldo"
    },
    {
        cpf: 14563298574,
        nome: "Monica"
    }
];

const corpoTabela = document.querySelector("[data-conteudo-tabela]");
  
const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `;

    linha.innerHTML = conteudoLinha;

    return linha;
}

infoClientes.forEach( indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});