sleep=1s

#Exercises 1;
echo "\nListando todos os processos\n\n"
ps
sleep $sleep

#Exercises 2;
echo "\nIniciando um processo sleep de 30 segundos"
sleep 30 &
sleep $sleep

#Exercises 3;
echo "Econtre o PID do processo sleep\n"
ps
echo "\n"
read -p "Digite o PID do processo sleep:    " inputPid
echo "\nFinalizando o processo sleep"
sleep $sleep
kill $inputPid
echo "\nProcesso finalizado\n"
ps

#Exercises 4;
echo "\n\n\n\nAinda pensando em uma forma de automatizar a partir da atividade numero 4. Por hora, você deve seguir essas etapas manualmente."

