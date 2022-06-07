let lista = [1, 2, 3, 4, 7, 8, 22];

function substituirPares (lista) {
    if (!lista.length) return console.log(-1);
    for (i = 0; i < lista.length; i++ )
        if (lista[i] % 2 === 0)
            lista[i] = 0
    return console.log(lista)
}

substituirPares(lista)