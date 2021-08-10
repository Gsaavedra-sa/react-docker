link para a aplicaçao funcionando no heroku,e link para repositorio git
https://reactdesafio.herokuapp.com/
https://github.com/Gsaavedra-sa/react-docker

Aplicação React js 
Servidor web Nginx
Containers Docker
Heroku deploy
travis integraçao

para starta o projeto
#docker-compose up -d --build
ja sobe todos os containers e starta a aplicação e foi integrado com o travis para fazermos o deploy, ao fazer commit para o git o travis faz o build e depois faz o deploy automatico para o Heroku, podendo ser alterado para uma instancia na AWS, mas como minha conta acabou o perido free nao pude subir direto na aws.

acessar localhost
#localhost:http://localhost:8080/
a aplicação do react funciona na porta 3000, mas foi redirecionado para a porta 8080  do nginx.




