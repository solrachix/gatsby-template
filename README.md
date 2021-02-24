<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://camo.githubusercontent.com/b0972dd62bbf6ee0e28ed0ebceb48427a481568caeeb639066b23c754f0c60e5/68747470733a2f2f7777772e6761747362796a732e636f6d2f4761747362792d4d6f6e6f6772616d2e737667" width="80" />
  </a>
</p>
<h1 align="center">
  Template Gatsby completo!
</h1>

Comece seu projeto com este template. Esse iniciador é fornecido com os arquivos e configurações mais essenciais do Gatsby, que você pode precisar para começar a funcionar em alta velocidade com o gerador de aplicativos extremamente rápido para o React.

## 🚀 Quick start

1.  **Crie um site do Gatsby.**

     
	Use a CLI do Gatsby para criar um novo site, especificando esse **Template**.

    ```shell
    # Crie um novo site do Gatsby usando esse Template
    gatsby new my-project https://github.com/solrachix/gatsby-template
    ```

2.  **Comece a desenvolver.**

    Navegue até o diretório do seu novo site e inicie-o.

    ```shell
    cd my-project/
    gatsby develop
    ```

3.  **Abra o código e comece a editar!**

	  Seu site agora está sendo executado em `http://localhost:8000`!

	_Nota: Você também verá um segundo link: _`http://localhost:8000/___graphql`_. Esta é uma ferramenta que você pode usar para experimentar a consulta de seus dados. Saiba mais sobre como usar esta ferramenta no [tutorial do Gatsby] (https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql) ._

	Abra o diretório `my-project` no seu editor de código de sua escolha e edite` src/pages/index.js`. Salve suas alterações e o navegador será atualizado em tempo real!

## PWA
Progressive Web App é um termo usado para denotar uma nova metodologia de desenvolvimento de software. Ao contrário dos tradicionais aplicativos, um Progressive Web App pode ser visto como uma evolução híbrida entre as páginas da web regulares e um aplicativo móvel.

O web app manifest (parte da especificação [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) ) ativado pelo **plugin manifest**, permite que os usuários adicionem seu site à tela inicial na maioria dos navegadores móveis - [veja aqui](http://caniuse.com/#feat=web-app-manifest) . O manifest fornece configuração e ícones para o telefone.

Este plugin fornece vários recursos além da configuração do manifesto para facilitar sua vida, são eles:

-   Geração automática de ícones - gera vários tamanhos de ícones a partir de uma única fonte
-   [Suporte Favicon](https://www.w3.org/2005/10/howto-favicon)
-   Suporte a ícones herdados (iOS) [1](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=pwa#fn-1)
-   [Bloqueio de cache](https://www.keycdn.com/support/what-is-cache-busting)
-   Localização - fornece manifestos exclusivos para localização baseada em caminho ( [exemplo de Gatsby](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n) )

Cada um desses recursos possui ampla configuração disponível para que você esteja sempre no controle.

## Plugins implementados:
Aonde pesquisar esse Plugins? [ Clique aqui e pesquise]([https://www.gatsbyjs.org/plugins/](https://www.gatsbyjs.org/plugins/))

- **react-helmet**: O React Helmet é um componente que permite controlar a cabeça do documento usando o componente React;
- **sitemap**: Gera um sitemap automático no build;
- **transformer-remark**: É responsável por transformar os posts do blog escritos em Markdown para HTML;
- **manifest**: Cria um manifest sem complicações;
- **feed**: Cria um feed RSS para o seu site.
- **nprogress**: Barra de progressão na parte superior da pagina, estilo youtube;
- **google-analytics**: Dá suporte para o analytics no seu site;
- **styled-components**: Modelo de estilização CSS IN JS;
- **page-creator**: Cria automaticamente páginas dos componentes React em diretórios especificados;
- **source-filesystem**: Server para obter dados no aplicativo Gatsby a partir do sistema de arquivos local;
- **offline**: Dá suporte para o site funcionar offline;


## 🧐 O que tem dentro?

Uma rápida olhada nos arquivos e diretórios de nível superior que você verá nesse template do Gatsby.

    .
    ├── node_modules
    ├── config/
    │ 	└── MetaData.js
    ├── src/
    │ 	├── assets/
	│ 	│ 	└── images/
	│ 	│ 		└── logo.png
	│ 	├── components/
	│ 	├── Pages/
	|	│ 	└── index.js
	│ 	├── posts/
	|	│ 	└── 2020-04-08--nosso-primeiro-post/
	|	│ 		└── index.md
	│ 	├── styles/
	│ 	|	├── themes/
	│ 	|	└── GlobalStyles.js
	│ 	├── templates/
	│ 	|	├── post.js
	│ 	|	└── tag.js
	│ 	└── html.js
	├── static/
	│ 	├── favicon.ico
	│ 	└── robots.txt
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

| Arquivos/Pastas | Descrição |
|-----------------|-----------|
| **/node_modules** |  Este diretório contém todos os módulos de código dos quais seu projeto depende (pacotes npm) são instalados automaticamente.
| **/src** | este diretório conterá todo o código relacionado ao que você verá no front-end do seu site (o que você vê no navegador), como o cabeçalho do site ou um modelo de página . `src` é uma convenção para" código fonte ".
| **.gitignore** | Este arquivo informa ao git quais arquivos ele não deve rastrear / não manter um histórico de versão.
| **.prettierrc** | este é um arquivo de configuração para o [Prettier](https://prettier.io/). O Prettier é uma ferramenta para ajudar a manter a formatação do seu código consistente.
| ***gatsby-browser.js** | É neste arquivo que o Gatsby espera encontrar qualquer uso das [APIs do navegador Gatsby](https://www.gatsbyjs.org/docs/browser-apis/) (caso existam). Isso permite a personalização / extensão das configurações padrão do Gatsby que afetam o navegador.
| **gatsby-config.js** | Este é o principal arquivo de configuração de um site do Gatsby. É aqui que você pode especificar informações sobre o seu site (metadados), como o título e a descrição do site, quais plugins do Gatsby você gostaria de incluir, etc. (Confira os [documentos da configuração](https://www.gatsbyjs.org/docs/gatsby-config/) para mais detalhes).
| **gatsby-node.js** | É neste arquivo que o Gatsby espera encontrar qualquer uso das [APIs do Nó Gatsby](https://www.gatsbyjs.org/docs/node-apis/) (caso existam). Isso permite a personalização / extensão das configurações padrão do Gatsby que afetam partes do processo de criação do site.
| **gatsby-ssr.js** | É neste arquivo que o Gatsby espera encontrar qualquer uso das [APIs de renderização do servidor Gatsby](https://www.gatsbyjs.org/docs/ssr-apis/) (caso existam). Isso permite a personalização das configurações padrão do Gatsby que afetam a renderização no servidor.
| **LICENSE** |  Gatsby está licenciado sob a licença MIT
| **package-lock.json** |  (consulte`package.json` abaixo, primeiro). Este é um arquivo gerado automaticamente com base nas versões exatas das dependências do npm que foram instaladas para o seu projeto. **(Você não altera este arquivo diretamente).**
| **package.json** | Um arquivo de manifesto para projetos Node.js., que inclui itens como metadados (nome do projeto, autor, etc.). Este manifesto é como o npm sabe quais pacotes instalar para o seu projeto.
| **README.md** | Um arquivo de texto contendo informações de referência úteis sobre o seu projeto.
| **** |



## 🎓 Aprendendo Gatsby

Procurando mais orientações? A documentação completa de Gatsby está [no site] (https://www.gatsbyjs.org/). Aqui estão alguns lugares para começar:

- **Para a maioria dos desenvolvedores, recomendo começar com o nosso [tutorial detalhado para criar um site com o Gatsby] (https://www.gatsbyjs.org/tutorial/).** Começa com zero suposições sobre seu nível de capacidade e percorre todas as etapas do processo.

- **Para mergulhar diretamente nos exemplos de código, acesse a [documentação] (https://www.gatsbyjs.org/docs/).** Em particular, consulte as seções _Guides_, _API Reference_ e _Advanced Tutorials_ nas Barra Lateral.

## 💫 Deploy

[![Deploy no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/solrachix/gatsby-template)

[![Deploy com ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/solrachix/gatsby-template)