Baixar e instalar o Node: 
- nodejs.org/en/download

Instalar o TypeScript e o AngularCLI
- $ npm install -g @angular/cli
- $ npm install -g typescript

Instalar o pacote json-server, gerencia um BD Json para efeitos de teste
- $ npm install -g json-server

Rodar a aplicação (angular)
- no terminal (prompt, shell), entrar no diretorio do projeto e inserir o comando:
- $ ng serve (vai rodar em localhost:4200)

exemplo: 
C:\Users\isaia\lab13\crud-pessoa\crud-pessoa>ng serve

Rodar o json-server
- no terminal (prompt, shell), entrar no diretorio do projeto e inserir o comando: 
- $ ng json-server --no-cors --watch ./db.json

exemplo:
C:\Users\isaia\lab13\crud-pessoa\server>json-server --no-cors --watch ./db.json

Observação: a aplicação angular e o json-server devem ser executados simultaneamente. Abrir duas abas do prompt, uma para cada e rodá-las separadamente.
