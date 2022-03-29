# Fundamentos do Desenvolvilmento Web - ( Unix & Bash )

Este repositório é responsável por armazenar todas as atividades do **segundo dia** do segundo bloco **Git, GitHub e Internet** do primeiro módulo **Fundamentos do desenvolvimento web** da [Trybe](https://betrybe.com) 🚀

## Índice

- [Fundamentos do Desenvolvilmento Web - ( Unix & Bash )](#fundamentos-do-desenvolvilmento-web----unix--bash-)
  - [Índice](#índice)
  - [Atividades](#atividades)
    - [Entendendo os comandos na prática](#entendendo-os-comandos-na-prática)

## Atividades

As atividades foram conclúidas no computador local.

### Entendendo os comandos na prática

1. Navegue até a raiz do projeto com o arquivo .txt;

2. Verifique se não existe nada sem **commit** utilizando o comando `git status`;

3. Crie uma nova `branch` com o nome `trybe-skills-changes` e faça checkout nela;

4. No arquivo `.txt`, ao final da lista de habilidades, adicione mais duas habilidades que serão desenvolvidas na [Trybe](https://betrybe.com) 🚀;

    - Faça um git add `nome-do-arquivo.extensao`;
    - Você pode adicionar todos os arquivos modificados usando `git add .`, mas é recomendado evitar;
    - Agora um `git commit -m "mensagem que você gostaria"`;
    - Uma boa prática é sempre resumir o que seu commit está alterando, por exemplo, `git commit -m "Adiciona nova skill"`;
    - Evite aglomerar modificações em um único commit.;
    - Por ultimo `git push -u origin sua-branch`.

5. Abra um Pull Request com uma descrição detalhada;

    - Dê contexto para o que você está fazendo, com links ou cite especificações que forem relevante;
    - O merge deve ser realizado apenas quando completar o exercício 10.

6. Retorne para a branch principal `master` com o comando: `git checkout master`;

7. Verifique se você está na branch `master` com o comando `git branch`;

8. Crie uma nova branch `trybe-skills-updates` a partir da `master` e faça checkout nela;

9. No mesmo arquivo .txt que você modificou no passo 4, também ao final, adicione mais algunss aprendizados:

   - Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch;
   - Faça um `git add nome-do-arquivo.extensao`;
   - Agora um `git commit "mensagem que você gostaria"`;
   - e por ultimo um `git push ú origin trybe-skills-updates`;
   - Após o primeiro "push" você pode usar apenas o comando `git push`;
   - Abra um Pull Request com uma descrição amigável
     - O merge deve ser feito apenas quando chegar no exercício 10.

10. Agora, faça o `merge` das branches `trybe-skills-changes` e `trybe-skills-updates` na branch `master`, através do Pull Request:

    - Primeiro vá até a pagina do primeiro Pull Request (branch `trybe-skills-changes`) e faça o merge clicando no botão verde "Merge Pull Request";

    - Agora vá até a página do outro Pull Request (branch `trybe-skills-updates`) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque o Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente e o git não consegue determinar sozinho qual das duas linhas é a correta;

    - Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (lembre-se de apagar as linhas com `<<<<<<<` e `>>>>>>>`, elas são criadas apenas para dar uma identificação mais visual ao problema). Depois clique em "Mark as resolved" e, em seguida, em "Commit merge";

    - Agora você deve conseguir "mergear" seu Pull Request normalmente.
