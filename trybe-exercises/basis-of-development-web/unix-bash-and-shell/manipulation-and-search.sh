#Var: delay;
sleep=1s

#Exercise 1 and 2;
echo "Acessando o diretorio unix_tests\n"
cd unix_tests
sleep $sleep
if [ ! -f countries.txt ]; then
    echo "Baixando arquivo countries.txt para o diretorio\n"
    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
else
    echo "\n\nErro: Ja existe um arquivo countries.txt.\n\nRemovendo o arquivo atual e baixando novamente..\n\n"
    sleep $sleep
    rm countries.txt && curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
fi
sleep $sleep
echo "Mostrando seu conteudo"
cat countries.txt
sleep $sleep
echo "\n\nLimpando o terminal.."
sleep $sleep
clear
sleep $sleep

#Exercise 3 and 4;
echo "O exercicio tres abrira o arquivo [countries.txt] e você devera navegar por ele pressionando [space] ate encontrar a palavra Zambia, quando encontrar pressione [q] para sair.\n\n"
read -p "Deseja continuar? [sim/nao]   " input

if [ $input = "sim" ]; then
    echo "\n\nAbrindo o arquivo countries.txt\n\n"
    less countries.txt
    sleep $sleep
else
    echo "Pesquisando a palavra Zambia no arquivo countries.txt"
    sleep $sleep
    less -p 'Zambia' countries.txt
    sleep $sleep
    echo "\n\nLimpando o terminal..\n"
    sleep $sleep
    clear
    sleep $sleep
fi

#Exercise 5 and 6;
echo "Pesquisando a palavra Brazil no arquivo countries.txt\n\n"
sleep $sleep
less -p 'Brazil' countries.txt
sleep $sleep
echo "Pesquisando a palavra brazil em lower case no arquivo countries.txt\n\n"
sleep $sleep
less -ip 'brazil' countries.txt
sleep $sleep

#Exercise 7;
echo "Criando o arquivo phrases.txt\n"
sleep $sleep
echo "A trybe e a melhor\nA trybe ensina muito bem\nA equipe da trybe e a melhor\nEu amo estudar na Trybe" > phrases.txt
sleep $sleep
echo "Mostrando frazes\n\n"
cat phrases.txt
sleep $sleep
echo "\nBuscando frases que contenham a palavra fox\n"
grep 'fox' phrases.txt
sleep $sleep
echo "\nAdicionando uma frase que contenha a palavra fox e fazendo a busca novamente..\n\n"
sleep $sleep
echo "\nI luv fox" >> phrases.txt && grep 'fox' phrases.txt
sleep $sleep

#Exercise 8 and 9;
echo "\nContando o numero de palavras e linhas no arquivo phrases.txt\n"
echo "Total de palavras: $(cat phrases.txt | wc -w)"
echo "Total de linhas: $(cat phrases.txt | wc -l)"
sleep $sleep
echo "\n\nLimpando o terminal..\n\n"
sleep $sleep
clear
sleep $sleep

#Exercise 10;
echo "\n\nCriando os arquivos empty.tbt e empty.pdf\n"
touch empty.tbt empty.pdf
sleep $sleep

#Exercise 11, 12 and 13;
echo "\nlistando todos os arquivos do diretorio unix_tests"
ls
sleep $sleep
echo "\n\nlistando arquivos .txt"
ls *.txt
sleep $sleep
echo "\n\nlistando todos os arquivos .tbt e .txt"
ls *.tbt *.txt

echo "\n\nAcessando o manual do comando ls\n"
sleep $sleep
man ls
sleep $sleep
#Exercise 1 and 2;
#Exercise 1 and 2;
#Exercise 1 and 2;
#Exercise 1 and 2;


