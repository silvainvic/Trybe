sleep=2s

echo "Navegando ate a pasta unix_tests\n"
cd unix_tests/
sleep $sleep

echo "\nRodando o comando ls -l\n"
ls -l
sleep $sleep

echo "\nMudando as permissoes do arquivo bunch_of_things.txt"
chmod 666 bunch_of_things.txt
sleep $sleep
echo "\nExibindo permissões do arquivo bunch_of_things.txt"
ls -l bunch_of_things.txt
sleep $sleep

echo "\nRemovendo a permissao de escrita do arquivo bunch_of_things.txt"
chmod a-w bunch_of_things.txt
sleep $sleep
echo "\nExibindo permissões do arquivo bunch_of_things.txt"
ls -l bunch_of_things.txt
sleep $sleep

echo "\nRestaurando as permissoes do arquivo bunch_of_things.txt"
chmod 644 bunch_of_things.txt
sleep $sleep
echo "\nExibindo permissões do arquivo bunch_of_things.txt"
ls -l bunch_of_things.txt
sleep $sleep