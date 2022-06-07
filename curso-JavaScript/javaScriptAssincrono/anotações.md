# Resumo

## Assincronicidade
Assíncrono é algo que não ocorre ou não se efetiva ao mesmo tempo.
Por padrão o JavaScript roda de maneira síncrona, enviando uma instrução e esperando o resultado.

## Promises
Objeto de processamento assíncrono que inicialmente tem valor desconhecido, podendo então ser resolvida ou rejeitada.
Promises possuem 3 estados: Pendente, no momento de sua declaração. Satisfeito, quando completada.Rejeitado quando ocorre um erro.

    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject) => {
        Window.setTimeout(() => {
        resolve('Resolvida');
        }, 2000);
    });

        const resolved = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));

        return resolved;
    }

    resolvePromise();

## APIs (Application Programming Interface)
Uma Api é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.
Você consegue acessá-la por meio de URLs.

### fetch
Operações no banco de dados(POST, GET, PUT, DELETE, etc)

    fetch('https://endereco-api.com/,{
        method: 'GET',
        cache: 'no-cache',

    })
        .then(response => response.json())
        .then(json => console.log(json))
        
    // retorna uma Promise

    fetch('https://endereco-api.com/,{
        method: 'GET',
        cache: 'no-cache',
        body: JSON.stringify(data),

    })
        .then(response => response.json())
        .then(json => console.log(json))

    // retorna uma Promise
