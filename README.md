# Innova

Landing page desenvolvida para o **teste técnico de front-end** da empresa [Innova - All the brand](https://aatb.com.br/) sobre a Holambra Cooperativa, uma empresa do setor agroindustrial.

Você pode acessar o protótipo da intefarce e também sua identidade visual em [AdobeXS](https://xd.adobe.com/view/1cf204a5-a446-4ac5-8e6d-690925097289-49a1/).
Esse projeto project foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.2.1.

## Instruções

Após clonar o projeto, instale as dependências do projeto com `$ npm install`.
Execute o `ng serve` para obter um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregado automaticamente se você alterar algum dos arquivos de origem.

## Execução do teste técnico

Durante o desenvolvimento deste projeto, foram adotadas diversas boas práticas visando a qualidade, manutenibilidade e performance do código. Algumas das principais práticas incluem:

- Utilização da metodologia BEM (Block, Element, Modifier) para organizar e estruturar o CSS, facilitando a manutenção e escalabilidade do código.
- Adoção do pré-processador Sass para escrever estilos de forma mais eficiente e modular.
- Criação de componentes com variantes de estilo, tornando o código mais flexível e reutilizável.
- Implementação de componentes dinâmicos com base em dados fornecidos por um arquivo JSON, permitindo fácil atualização e personalização do conteúdo.
- Atendimento aos princípios de responsividade, garantindo uma experiência consistente em diferentes dispositivos e tamanhos de tela.
- Validações condicionais com mensagens de erro nos campos do formulário utilizando Expressões Regulares (REGEX) e Validators do Angular.

### Otimização do projeto

O desempenho e a qualidade deste projeto foram avaliados usando a ferramenta [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR). Abaixo estão os resultados obtidos:

> **Performance**: 100/100
> **Acessibilidade**: 90/100
> **Melhores Práticas**: 100/100
> **SEO**: 91/100

Para alcançar esses resultados, foram implementadas as seguintes práticas:

**Acessibilidade**: Utilização adequada de atributos HTML para estruturar e descrever o conteúdo de forma clara e informativa.

**Performance e SEO**: A otimização da performance e SEO do site foi uma prioridade durante o desenvolvimento. Foram implementadas meta tags, robot.txt e sitemap para melhorar a indexação pelos motores de busca. Além disso, foram adotadas práticas como o carregamento progressivo de fontes e o lazyloading de imagens para reduzir o tempo de carregamento da página e melhorar a experiência do usuário.
