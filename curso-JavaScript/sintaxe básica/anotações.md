# Resumo

## Variáveis:

### Tipos Primitivos

#### Boolean
    ex: var vOuf = false;

#### Number
var numeroQualquer = 1;

#### String
var nome = 'Fulano';

### Declaração
variáveis com escopo global:
    var nome = "Fulano"
variáveis com escopo de bloco (local):
    let numero = 0
dados que servem somente para leitura e não devem ser alterados são declarados como constantes:
    const juros = 15

### Operadores Aritméticos:
    adição +
    subtração -
    multiplicação *
    divisão real /
    divisão inteira %
    potenciação ** 
### Operadores Relacionais:
    > maior que;
    < menor que;
    >= maior ou igual à;
    <= menor ou igual à;

### Operadores Lógicos:
    && - "e" = exige que ambos os valores sejam verdadeiros;
    || - ou = exige que apenas um dos valores seja verdadeiro;
    !- "não" = inverte o valor false/true.

## Vetores ou Arrays:
Arrays são listas ou matrizes de variáveis, onde cada variável possui um índice. Pode possuir valores de multiplos tipos.
Deve ser declarado dentro de [].
    Ex: let array = ['string', 1, true]

### Manipulando Arrays:
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.
 - ForEach() - itera um array;
 - push() - adiciona item ao final do array;
 - pop() - remove item do final do array;
 - shift() - remove item no início do array;
 - unshift() - adiciona item no início do array;
 indexOf() - retorna o índice de um valor;

## Objetos
Dados que possuem propriedades e valores que definem suas características. Deve ser declaradoo entre chaves {}.
Ex: Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada da seguinte forma:
    var xicara = {
        cor: 'azul',
        tamanho: 'p',
        funcao: tomarCafe()
    }

### Desestruturação
Uma forma de desestruturar um objeto é utilizando chaves {} ao declarar a variável:
    Ex: var xicara = {cor:'azul', tamanho:'p', funcao: tomarcafe()}
        var {cor, tamanho, funcao} = xicara;

## Estruturas condicionais
Instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição;
    Ex: Um jogo precisa mudar o placar toda vez que um jogador marcar ponto;

### if
A palavra "if" é usada para estabelecer uma condição:
    Ex: var jogador1 = 0;
        var jogador2 = 0;

        if (jogador1 > 0) {
            console.log('Jogador1 marcou ponto!')
        }
    // se o jogador1 tiver valor maior que 0 ele marcou um ponto.

### else if
Caso haja mais de uma condição usamos o "else if".
    Ex: var jogador1 = 1;
        var jogador2 = 0;

        if(jogador1>0) {
            console.log('Jogador 1 marcou ponto!');
        } else if(jogador2 >0) {
            console.log('Jogador 2 marcou ponto!');
        } else {
            console.log('Ninguém marcou ponto');
        }

### aninhamento de condições
Podemos também usar o "if" dentro de um outro "if".
    Ex: if (jogador1 !== -1) {
        if (jogador1 > 0) {
            console.log(Jogador 1 marcou ponto!');
        } else if (jogador2 > 0) {
            console.log('Jogador 2 marcou um ponto!');
        } else {
            console.log('Ninguém marcou ponto!');
        }
    }

### if ternário
Podemos também fazer uma verificação em uma única linha usando o "if" ternário:   
    Ex: [condição] ? [instrução1] : [instrução2];

    jogador1 > 0 ? console.log('Marcou ponto'): console.log('Não marcou ponto');

Lembre-se sempre de usar '?' e ':'

### switch/case
O switch/case também funciona como uma estrutura condicional:      
    Ex: switch ({expressao}) {     
        case 1:       
            {instrucao};       
            break;         
        case 2:           
            {instrucao};           
            break;           
        default: {         
            console.log('Empate')             
        }

Lembre-se sempre de usar 'break;' depois de uma instrução para evitar um loop infinito em seu código.

## Laços de repetição
São estruturas condicionais que repetem uma instrução até atingir determinada condição:

 - For;
    
    for([expressaoInicial]; [condicao]; [incremento]) {
        declaracao
    }

    ex: var array = ['valor1', 'valor2', 'valor3']   
        for (let i = 0; i < array.lenght; i++) {
            console.log(i);
        }

 - For/in;
    Funciona como uma repetição apartir de uma propriedade:

        for([indice] in [objeto ou array]) {declaracao}

        Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']
            
            for (i in array) {
                console.log(i);
                }

 - For/of;
    Funciona como uma repetição a partir de um valor:

        for ([indice] of [array]) {declaracao}

        ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']

        for (i of array) {
            console.log(i);
        }
    
    o For/of não funciona com objetos pois as propriedades variam, diferente do índice em um array que sempre será um número inteiro.

 - While;
    Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes de cada execução:

        Ex: var a = 0;
        while (a<10) {
            a++;
            console.log(a);
        }

 - Do/while;
    Executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois de cada execução:

        Ex: var a = 0;
        do {
            a++;
            console.log(a);
        } while (a < 10)

## Funções
São blocos de comandos e instruções para a execução de determinadas tarefas:

    Ex: function nomeDaFuncao() {
        instrucao;
    }

Para chamar a função dentro do código se usa:

    nomeDaFuncao();

Se houver algum parametro o mesmo é passado dentro de ()

### Tipos de Funções

#### Declarativas:

    function funcao() {
        console.log('Olá mundo!')
    }

#### Expressões de Funções:
São funções atribuídas à expressões. A nomeação da função por expressão é opcional:

    Ex1: var funcao = function nomeDaFuncao(){
        instrucao;
    }
    Ex2: var funcao = function() {
        instrucao;
    };

#### Arrow Function
São funções de expressãoo de sintaxe curta. Arrow function sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com () seguido de => e depois {}:

    Ex1: var funcao = () => {
        instrucao;
    }

### Parâmetros

#### Valores padrão
Podemos definir um valor padrão para quando um ou mais parâmetros não forem declarados. 

    Ex: function exponencial(array, num= 1) {
        const result = [];

        for(let i - 0; i < array.lenght; i++) {
            result.push(array[i] ** num);
        }

        return result;
    }

#### Objeto "arguments"
É um array com todos os parâmetros passados quando a função foi invocada.

    Ex: function findMax() {
        let max = -Infinity;

        for(let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }

        return max;
    }

#### Spread
Quando quisermos usar elementos separados de um array como parâmetros, devemos usar Spread adicionado (...) ao chamar a função.

    Ex: function sum(x, y, z) {
        return x + y + z;
    } 

    const numbers = [1, 2, 3];

    console.log(sum(...numbers));

#### Rest
Rest faz exatamente o oposto de Spread, combinando elementos separados em um array. Usando (args...) ao declarar a função.

    Ex: function confereTamanho(...args) {
        console.log(args.lenght)
    }

    confereTamanho() // 0
    confereTamanho(1, 2) // 2
    confereTamanho(3, 4, 5) // 3

### This
A palavra reservada this é uma referência de contexto.
No exemplo, this refere-se ao objeto pessoa.

    Ex: const pessoa = {
        firstName: "André",
        lastName : "Soares",
        id       : 1,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        getId: function() {
            return this.id;
        }
    };

    pessoa.fullName();
    // "André Soares"

    pessoa.getId();
    // 1

#### Manipular This

##### Call
Serve de referência para this

    Ex: const pessoa = {
        nome: "Miguel",
    }
        const animal = {
            nome: 'Murphy',
        };

        function getSomething() {
            console.log(this.nome);
        }

        getSomething.call(pessoa);
        // Miguel
        getSomething.call(animal);
        // Murphy

É possível passar parâmetros para uma função separando-os por vírgulas.

    Ex: const myObj = {
        num1: 2,
        num2: 4,
    };

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b);
    }

    soma.call(myObj, 1, 5);
    // 12

#### Apply
Tem a mesma funcionalidade do call, porém devemos passar os parêtros dentro de um array [].
    
    Ex: const myObj = {
        num1: 2,
        num2: 4,
    };

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b);
    }

    soma.call(myObj, [1, 5]);
    // 12

#### Bind
Clona a estrutura da função onde é chamada e aplica o valor do  objeto passado como parâmetro.

    const retornaNomes = function () {
        return this.nome;
    };

    let bruno = retornaNomes.bind({ nome: 'Bruno' });

    bruno();
    // Bruno

