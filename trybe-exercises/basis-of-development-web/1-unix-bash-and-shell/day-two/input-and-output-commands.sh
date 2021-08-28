#Var; Sleep;
sleep=1s

#Exercise ;
echo "Acessando o diretorio unix_tests\n"
if [ -d unix_tests ]; then
    echo "Ja existe um diretorio unix_tests. Removendo o diretório existente e criando um novo no lugar."
    rm -rf unix_tests
fi
mkdir unix_tests && cd unix_tests
sleep $sleep

#Exercise 2;
echo "\nCriando o arquivo skills2.txt\n"
echo "Internet\nUnix\nBash" > skills2.txt
sleep $sleep

#Exercise 3;
echo "Adicionando mais cinco skills e exibindo em ordem alfabetica\n"
echo "Php\nVueJS\nReact\nTypeScript\nC++" >> skills2.txt
cat skills2.txt | sort
sleep $sleep

#Exercise 4;
echo "\nContando a quantidade de linhas no arquivo skills2.txt\n"
echo "Linhas: $(cat skills2.txt | wc -l)\n"
sleep $sleep

#Exercise 5;
echo "Criando o arquivo top_skills.txt"
cat skills2.txt | sort | head -3 > top_skills.txt
sleep $sleep

#Exercise 6;
echo "\nCriando o arquivo phrases2.txt"
echo "Eu sou nascido no brasil\nGosto de churrasco\nOdeio mastigar gorduras\nGosto de atividades fisicas\nSaudades da academia\nQuero voltar a correr no fim da pandemia" > phrases2.txt
sleep $sleep

#Exercise 7;
echo "\nContando o numero de linhas que contem br em phrases2.txt"
echo "Linhas: $(grep -c br phrases2.txt)"
sleep $sleep

#Exercise 8;
echo "\nContando o numero de linhas que não contem br em phrases2.txt"
echo "Linhas: $(grep -vc br phrases2.txt)"
sleep $sleep

#Exercise 9;
echo "\nAdicionanddo dois paises ao final de phrases2.txt"
echo "Brasil\nCanada" >> phrases2.txt
sleep $sleep

#Exercise 10;
echo "\nCriando o arquivo bunch_of_things.txt"
cat phrases2.txt ../../day-one/unix_tests/countries.txt > bunch_of_things.txt
sleep $sleep

#Exercise 11
echo "\nOrdenando o arquivo bunch_of_things.txt"
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $sleep 