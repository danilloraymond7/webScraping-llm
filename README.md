👳‍♂️
---

# Web Scraping com Análise de Conteúdo Usando IA

Este projeto realiza a análise automatizada de conteúdo de websites usando web scraping e processamento de linguagem natural (NLP) com a ajuda de ferramentas poderosas como o [LangChain](https://langchain.com) e [OpenAI GPT-4](https://openai.com).

## Descrição

Este projeto carrega o conteúdo de uma página web (especificamente, extrai o texto dos elementos `<p>` de uma página) e, em seguida, utiliza um modelo de linguagem (GPT-4) para analisar e gerar um resumo organizado e relevante do conteúdo. O modelo também identifica tópicos principais, dados importantes, e destaca pontos interessantes ou curiosos.

## Funcionalidade

- **Web Scraping**: Carrega e extrai o conteúdo de sites usando o `CheerioWebBaseLoader`.
- **Processamento de Linguagem Natural**: Usa o modelo de linguagem GPT-4 para analisar o conteúdo extraído e gerar resumos com base em um prompt personalizado.
- **Execução Personalizada**: Permite que o usuário forneça um template de prompt para direcionar a análise do conteúdo.

## Pré-requisitos

- Node.js (v14 ou superior)
- Uma chave da API OpenAI para acessar o modelo GPT-4.

## Instalação

1. Clone este repositório:

    ```bash
   gh repo clone danilloraymond7/webScraping-llm
    cd web-scraping-ia
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API OpenAI:

    ```
    OPENAI_API_KEY=SuaChaveDaApiOpenAI
    ```

## Como Usar

1. Edite o arquivo `app.js` e substitua a variável `siteUrl` pelo URL do site que deseja analisar.

2. Personalize o template do prompt, se necessário, para ajustar a análise ao seu caso específico.

3. Execute o script com o comando:

    ```bash
    npm run dev
    ```

Isso iniciará a análise do conteúdo do site e exibirá o resultado no console.

## Estrutura do Projeto

- `app.js`: Arquivo principal contendo a lógica de scraping e análise.
- `.env`: Arquivo para armazenar a chave da API OpenAI.
- `package.json`: Contém as dependências e scripts do projeto.

## Dependências

- `@langchain/community`: Utilizado para carregar o conteúdo da web.
- `@langchain/core`: Facilita a criação de prompts e interações com o modelo de IA.
- `@langchain/openai`: Integra com a API OpenAI.
- `cheerio`: Utilizado para parsear e extrair dados HTML.
- `dotenv`: Carrega variáveis de ambiente (como a chave da API).
- `nodemon`: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Exemplo de Prompt

Este é o template usado para analisar o conteúdo do site:

```js
const promptTemplate = `
Analise o conteúdo do site abaixo e gere um texto com base nas seguintes instruções:
- Identifique os tópicos principais.
- Resuma as informações mais importantes.
- Destaque pontos relevantes ou curiosos.
- Se houver dados numéricos ou estatísticas, mencione-os.
- Gere um texto claro e organizado com base na análise.

Conteúdo do site:
{content}
`;
```


