const { CheerioWebBaseLoader } = require("@langchain/community/document_loaders/web/cheerio");
const { ChatOpenAI  } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const dotenv = require("dotenv");

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Função para analisar o conteúdo de um site
async function analyzeSite(url, promptTemplate) {
  // Carregar o conteúdo do site usando CheerioWebBaseLoader
  console.log("Carregando o conteúdo do site...");
  console.log("URL:", url);
  const loaderWithSelector = new CheerioWebBaseLoader(
    url,
    {
      selector: "p",
    }
  );
  const docs = await loaderWithSelector.load();

  // Extrair o texto do site
  const siteContent = docs[0].pageContent; // Pega o conteúdo da primeira página

  // Inicializar o modelo de linguagem (LLM)
  const model = new ChatOpenAI ({
    model: "gpt-4o-mini", // Escolha o modelo de linguagem adequado
    openAIApiKey:process.env.API_KEY_OPENAI, // Substitua pela sua chave da API OpenAI
    temperature: 0.7,
  });

  // Criar um prompt personalizado
  const prompt = new PromptTemplate({
    template: promptTemplate,
    inputVariables: ["content"],
  });

  // Formatar o prompt com o conteúdo do site
  const formattedPrompt = await prompt.format({
    content: siteContent,
  });

  // Enviar o prompt para o modelo de linguagem
  const analysisResult = await model.invoke(formattedPrompt);
  // Exibir o resultado da análise
  console.log("Resultado da análise:\n", analysisResult.content);
}


const siteUrl = ""; // Substitua pelo URL do site que você deseja analisar


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

// Executar a função
analyzeSite(siteUrl, promptTemplate)
  .then(() => console.log("Análise concluída!"))
  .catch((err) => console.error("Erro:", err));