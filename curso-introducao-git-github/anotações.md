# Resumo do curso 📓
 1. Configuração do Git:   
  - [Download](https://git-scm.com/downloads)   
  - Instalar o Git na pasta de sua preferencia   
  - [Criar conta no Github](https://github.com)   
  - Abrir o terminal extendido do Git - **Git-Bash**   
    - Configurar suas credenciais com os comandos:   
        git config --global user.name "seunome"   
        git config --global user.email "seuemail"   
        >Esses dados serão utilazados em seus commits   
    - Gerar uma chave ssh com o comando:   
        ssh-keygen -t rsa -C "seuemail"  
    - Especificar o nome e local onde o arquivo com a chave será criado > pressionar enter vai aceitar os valores padrões.  
    - Criar uma senha   
    - No local especificado abrir a pasta .ssh e copiar a chave do arquivo .pub
  - Dentro da sua conta do Github:
    - Entrar em Settings\SSH and GPG keys\ New SSH key   
    - Escolher um nome para seu ambiente de trabalho   
    - Colar a sua chave pública do arquivo .pub   
  - Para verificar se está tudo certo abra o git-bash e use o comando:   
    ssh -T git@github.com
  - Aparecerá uma mensagem perguntando se deseja continuar com a conexão, digite yes/sim. Caso receba uma mensagem com seu nome de usuário e "you've successfully authenticated" tudo ocorreu como esperado!   
 2. Comandos básicos do git-bash:   
  - Navegue até a pasta onde deseja criar o repositório e clique com o botão direito do mouse\git bash here\      
  - git init >> criar o repositório local na pasta selecionada
  - git add remote origin 'url do repositorio no GitHub' >> sincroniza seu repositório local com o remoto.      
  - git add 'nomedoarquivo', * ou . >> adiona os arquivos ao stage   
  - git commit -m "descrever as mudanças que serão commitadas" >> Informa ao git quais arquivos estão prontos para serem enviados para o repositório remoto.   
  - git push origin main >> manda os arquivos locais para o repositório remoto.   
  - git pull origin main >> recebe os arquivos do repositório remoto em seu repositório local.   

Pode-se também criar primeiro o repositório remoto dentro do GitHub e então depois clona-lo para sua máquina copiando a url do mesmo e utilizando o comando 'git clone "urldorepositório".   
Isso fará com que o Git crie um repositório local na pasta selecionada, copiando todo o conteúdo do repositório remoto e criando automaticamente uma referencia ao mesmo chamada origin.