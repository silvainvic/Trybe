# Descobri a possibilidade de automatização em scripts shell, assistindo ao conteúdo bônus e olhando as referências de GitHUB de ex-alunos oferecidas pela trybe.
#
# Creditos: https://github.com/paulohbsimoes - Paulo Simões   -   Ex-Aluno Tryber.
#
# Obs. Apesar dos comandos aqui serem parecidos com o script desenvolvido por Paulo Simões, me comprometi a usar apenas como referência visual. Todos os comandos foram aplicados utilizando apenas o meu conhecimento até aqui. 
#------------------------------------------------------

#Var: delay;
sleep=1s

#Exercise 1.;
echo "Criando o diretorio unix_tests.\n"
mkdir unix_tests && cd unix_tests
sleep $sleep
echo "Diretorio criado com sucesso..\n"
sleep $sleep

#Exercise 2 and 3;
echo "Criando o arquivo de texto trybe.txt e criando um backup.\n"
touch trybe.txt && cp trybe.txt trybe_backup.txt
sleep $sleep
echo "...\n"
sleep $sleep

#Exercise 5 and 6;
echo "Criando um diretorio de backup e movendo o arquivo trybe_backup.txt para o diretorio.\n"
mkdir backup && mv trybe_backup.txt backup/
sleep $sleep
echo "...\n"
sleep $sleep

#Exercise 7 and 8;
echo "Erro.. Criando um novo diretorio de backup e movendo o arquivo para o novo diretorio."
mkdir new_backup && mv backup/trybe_backup.txt new_backup/
sleep $sleep
echo "...\n"
sleep $sleep

#Exercise 9 and 10;
echo "Removendo o diretorio backup e renomeando o novo diretorio new_backup para backup\n"
rm -rf backup/ && mv new_backup/ backup/
sleep $sleep
echo "...\n"
sleep $sleep

#Exercise 4;
echo "Renomeando o arquivo trybe.txt para trybe.old.txt\n"
mv trybe.txt trybe.old.txt
sleep $sleep
echo "...\n"
sleep $sleep

#Exercise 11;
echo "Mostrando o path completo do diretorio atual\n"
pwd
echo "\n"
sleep 3s
echo "Listando todos os arquivos dentro dele \n"
ls
echo "\n"
sleep 3s

#Exercise 12;
echo "Removendo o diretorio backup"
rm -rf backup/

#Exercise 13;
echo "Limpando terminal em 3 segundos.."
sleep 3s
clear;

#Exercise 14;
echo "Criando o arquivo skills.txt e inserindo valores..\n\n"
sleep $sleep
echo "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" >> skills.txt
sleep $sleep
echo "\nMostrando os cinco primeiros valores\n\n"
cat skills.txt | head -5
sleep $sleep

#Exercise 15;
echo "\nMostrando na tela os quatro ultimos valores\n\n"
cat skills.txt | tail -4
sleep $sleep

#Exercise 16;
echo "Apagando arquivos .txt\n"
rm -rf *.txt
sleep $sleep
echo "\nE N D\nE N D\nE N D\nE N D\n"