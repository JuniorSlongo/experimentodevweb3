# Exemplo de Aplicação HTTP Simples

Este é um exemplo de uma aplicação HTTP simples escrita em Node.js. Ela inclui um servidor HTTP que responde a requisições GET e POST, e uma página HTML que permite fazer requisições para o servidor.

## Pré-requisitos

Antes de executar a aplicação, é necessário ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Como usar

1. Clone ou faça o download deste repositório para sua máquina local.
2. Abra um terminal e navegue até o diretório onde os arquivos estão localizados.
3. Execute o servidor Node.js digitando o seguinte comando:

    ```
    node server.js
    ```

   Isso iniciará o servidor na porta 3000.

4. Abra um navegador da web e digite o seguinte URL na barra de endereços:

    ```
    http://localhost:3000
    ```

   Isso abrirá a página HTML que permite fazer requisições GET e POST para o servidor.

5. Você pode clicar nos botões na página HTML para enviar requisições GET e POST para o servidor. Os resultados das requisições serão exibidos na página.

## Estrutura do Projeto

- `server.js`: Este arquivo contém o código do servidor Node.js que trata as requisições HTTP.
- `index.html`: Este arquivo contém o código HTML da página web que permite fazer requisições para o servidor.

## Códigos de Status

O servidor responde a diferentes códigos de status HTTP dependendo do tipo de requisição e dos dados fornecidos. Aqui estão os códigos de status que podem ser retornados:

- 200 (OK): A requisição foi bem-sucedida.
- 401 (Unauthorized): Credenciais de autenticação inválidas.
- 403 (Forbidden): Acesso ao recurso é proibido.
- 404 (Not Found): O recurso solicitado não foi encontrado.
- 500 (Internal Server Error): O servidor encontrou um erro interno.
