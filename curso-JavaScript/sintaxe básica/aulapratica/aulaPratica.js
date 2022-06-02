
function soma(n1, n2) {

    let iguais
    let total = n1 + n2
    let maior10
    let menor20

    if (!n1 || !n2)
    return alert('Erro! Digite dois números válidos!');

    (total >= 10) ? maior10 = 'maior' : maior10 = 'menor';

    (total <= 20) ? menor20 = 'menor' : menor20 = 'maior';
    
    (n1 == n2) ?  iguais = 'são iguais' : iguais = 'não são iguais';

    return alert(`Os números ${n1} e ${n2} ${iguais}. Sua soma é ${total}, que é ${maior10} que 10 e ${menor20} que 20.`);

}

const primeiroNumero = Number(prompt('Digite o primeiro número: '));
const segundoNumero = Number(prompt('Digite o segundo número: '));

soma(primeiroNumero, segundoNumero);
