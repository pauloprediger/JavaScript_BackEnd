const pessoa = {
    nome: '',
    idade: '',
    solteiro: null,
    hobbies: '',
    endereco: null // Adicionei 'endereco' para garantir que a propriedade existe
};

function adicionaPessoa(objPessoa, nome, idade, solteiro, hobbies) {
    objPessoa['nome'] = nome;
    objPessoa['idade'] = idade;
    objPessoa['solteiro'] = solteiro;
    objPessoa['hobbies'] = hobbies;
}

function mostraInfoPessoa(objPessoa) {
    for (let propriedade in objPessoa) {
        if (propriedade === 'endereco' && objPessoa[propriedade] !== null) {
            console.log(`${propriedade}:`);
            for (let subPropriedade in objPessoa[propriedade]) {
                console.log(
                    `  ${subPropriedade}: ${objPessoa[propriedade][subPropriedade]} (tipo: ${typeof objPessoa[propriedade][subPropriedade]})`
                );
            }
        } else {
            console.log(
                `${propriedade}: ${objPessoa[propriedade]} (tipo: ${typeof objPessoa[propriedade]})`
            );
        }
    }
}

adicionaPessoa(pessoa, 'Paulo', 25, false, 'Jogar');

mostraInfoPessoa(pessoa)

pessoa.endereco = {
    rua: 'Ponce de Leão',
    cidade: 'Porto Alegre',
    estado: 'RS'
}

mostraInfoPessoa(pessoa);

const pessoas = [
    {
        nome: 'Ana Silva',
        idade: 28,
        cidade: 'São Paulo'
    },
    {
        nome: 'Carlos Souza',
        idade: 34,
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'Maria Oliveira',
        idade: 25,
        cidade: 'Belo Horizonte'
    }
]



function mostrarListaPessoa (listaPessoas) {
    listaPessoas.forEach(pessoaLista => {
        console.log(pessoaLista)
    });
}

mostrarListaPessoa(pessoas);

pessoas.push({nome: 'Jesus', idade: '33', cidade:'Belém'})

mostrarListaPessoa(pessoas);

function filtraPorCidade(listaPessoas, cidade) {
    const novaLista = listaPessoas.filter(pessoaLista => pessoaLista.cidade === cidade);
    return novaLista;
}

console.log(filtraPorCidade(pessoas, 'Belém'));

