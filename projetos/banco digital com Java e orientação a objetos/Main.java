
public class Main {
    
    public static void main(String[] args) {
        Cliente Andrey = new Cliente();
        Andrey.setNome("Andrey");

        Conta cc = new contaCorrente(Andrey); 
        Conta poupanca = new ContaPoupanca(Andrey);

        cc.depositar(100);
        cc.transferir(50, poupanca);
        cc.imprimirExtrato();
        poupanca.imprimirExtrato();

    }
}
