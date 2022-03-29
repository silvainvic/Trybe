# Fundamentos do Desenvolvilmento Web - ( Unix & Bash )

Este repositório é responsável por armazenar todas as atividades do **primeiro dia** do segundo bloco **Git, GitHub e Internet** do primeiro módulo **Fundamentos do desenvolvimento web** da [Trybe](https://betrybe.com) 🚀

## Índice

- [Fundamentos do Desenvolvilmento Web - ( Unix & Bash )](#fundamentos-do-desenvolvilmento-web----unix--bash-)
  - [Índice](#índice)
  - [Atividades](#atividades)
    - [Instalação e Configuração de Git](#instalação-e-configuração-de-git)

## Atividades

### Instalação e Configuração de Git

1. **Instalação do Git**

   ```bash
   sudo apt-get install git-all
   ```

    este comando pode apresentar problemas em algumas distros como na distro DEBIAN, para resolução existem duas formas, a primeira é não baixar e instalar os pacotes recomendados:

    ```bash
    sudo apt install --no-install-recommends git-all
    ```

    A outra solução e a que mais prefiro é instruir para manter os pacotes que ja vem instalado na distro:

    ```bash
    sudo apt-get install git-all systemd-sysv
    ```

2. **Configuração**

    O primeiro paso é configurar sua identidade:

    ```bash
    git config --global user.name "Seu nome"
    git config --global user.email seuemail@exemplo.br
    ```

    Boa prática também configurar seu editor padrão:

    ```bash
    git config --global core.editor "code --wait"
    ```

3. **Verificar a configuração**

    Para verificar se a configuração da sua identidade foi feita, utilize o seguinte comando:

    ```bash
    git config --list
    ```

4. **Criação de conta no [GitHub](https://github.com/)**

5. **Gerando uma chave SSH**

    Existem duas formas de gerar uma chave SSH. A primeira, mais atual e com um maior nível de confiabilidade:

    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    E a segunda para sistemas mais legados e com um nível de confiabilidade seguro

    ```bash
    ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
    ```

6. **Adicionando sua chave SSH ao (ssh-agent)**

    primeiro você deve iniciar o SSH-agent

    ```bash
    eval "$(ssh-agent -s)"
    ```

    em sequência deve adicionar sua chave SSH

    ```bash
    ssh-add ~/.ssh/id_rsa
    ```

    **Obs.** Nos sistemas windows, para que não seja pedido a senha sempre que for fazer uma sincronização, necessário configurar o sistema para iniciar o OpenSSH com seus dados e configurar o GIT para fazer uso do OpenSSH do próprio sistema:

    ```bash
    git config --global core.sshcommand "C:/Windows/System32/OpenSSH/ssh.exe"
    ```

    alguns links podem ser uteis para sistema windows e pode ser que a solução para sua distro linux beire a mesma:

    **Links uteis para openSSH - Windows**

    - [SSH Client included in Windows](https://poshsecurity.com/blog/using-the-openssh-client-included-in-windows-10-1809-as-your-gits-ssh-client)
    - [SSH Password less access](https://superuser.com/questions/1433917/windows-10-ssh-client-password-less-access)
    - [Prevent SSH key password](https://nazmul-ahsan.medium.com/how-to-prevent-ssh-key-passphrase-prompt-every-time-you-launch-wsl-6856eae31add)

    **Obs.** Você pode ir em services e adicionar para o OpenSSH iniciar junto com o sistema para assim evitar algumas configurações propostas nos links.

7. **Adicionando sua chave SSH - GitHub**

    Antes de tudo deve se copiar sua chave ssh publica

    Linux - Copie o conteudo do arquivo

    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

    Windows - Navegue até o diretório e abra o arquivo com algum editor de texto e copie o conteudo do arquivo

    ```bash
    C:/Users/<SuaPastaDeUsuario>/.ssh/id_rsa.pub
    ```

    Entre no GitHub, **clique na sua foto de perfil** > **Settings** > **SSH and GPG Keys** > **New SSH Key** ou **Add SSH key**

    Adicione uma descrição para o campo **título** e cole sua chave no campo **key**. Depois basta clicar sobre **Add SSH key**;

8. Pronto, ja pode fazer uso de toda tecnologia **Git** e **GitHub**.
