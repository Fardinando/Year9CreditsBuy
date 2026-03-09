Year 9 Credits Buy 2026

Descrição do Projeto

O Year 9 Credits Buy 2026 é um site desenvolvido para arrecadar fundos para a viagem de formatura da turma Year 9 de 2026. A plataforma permite que familiares, amigos e apoiadores comprem créditos virtuais, que posteriormente podem ser utilizados nas bake sales organizadas pela turma ao longo do ano.

Cada crédito possui o valor de R$1,00, e os compradores podem escolher entre diferentes pacotes de créditos disponíveis no site. Todo o dinheiro arrecadado é destinado à realização da viagem de formatura da turma.

O projeto foi desenvolvido utilizando ferramentas modernas de desenvolvimento web e hospedagem, priorizando simplicidade, segurança e facilidade de uso para os compradores.

---

Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e plataformas:

- Design e geração inicial do site: Stitch
- Versionamento de código: GitHub
- Hospedagem e deploy: Vercel
- Processamento de pagamentos: Stripe

O site foi construído como uma aplicação web estática utilizando HTML, CSS e JavaScript, permitindo que seja hospedado facilmente em plataformas modernas de deploy contínuo.

---

Processo de Desenvolvimento

1. Criação do design com Stitch

O layout inicial do site foi gerado utilizando o Stitch, uma ferramenta de inteligência artificial desenvolvida para criar interfaces web a partir de descrições textuais.

Foi fornecido um prompt detalhado especificando:

- objetivo do site (arrecadação para viagem de formatura)
- estrutura da página
- estilo visual
- cores e tipografia
- seções necessárias
- experiência do usuário

A partir desse prompt, o Stitch gerou automaticamente:

- layout completo do site
- estrutura HTML
- estilos CSS
- elementos de interface como botões, cards e seções informativas

Após a geração do design, o código foi exportado diretamente da plataforma.

---

Estrutura do Site

O site possui as seguintes seções principais:

Header

Inclui:

- Nome do projeto
- Menu de navegação
- Botão de destaque para compra de créditos

Menu:

- Início
- Comprar Créditos
- Como Funciona
- Regras
- Contato

---

Hero Section

Seção principal de destaque com:

- título explicando o objetivo do projeto
- descrição da arrecadação
- botão principal de compra

Esta seção foi projetada para comunicar rapidamente a finalidade do site e incentivar os visitantes a apoiar a turma.

---

Seção de Pacotes de Créditos

Os créditos são exibidos em formato de cards de produto, permitindo fácil visualização e compra.

Pacotes disponíveis:

- 5 créditos — R$5
- 10 créditos — R$10
- 15 créditos — R$15
- 20 créditos — R$20
- 25 créditos — R$25
- 50 créditos — R$50
- 100 créditos — R$100

Cada card inclui:

- nome do pacote
- preço
- botão de compra

O pacote de 50 créditos é destacado como a opção mais popular.

---

Seção "Como Funciona"

Explica o processo de compra em quatro etapas:

1. Escolher um pacote de créditos
2. Realizar o pagamento
3. Receber confirmação por email
4. Utilizar os créditos nas bake sales

---

Regras

Inclui informações importantes sobre o uso dos créditos, como:

- créditos não utilizados não são reembolsáveis
- pagamentos não podem ser cancelados após confirmação
- toda a arrecadação é destinada à viagem da turma

---

Sistema de Pagamentos

Os pagamentos são processados utilizando o Stripe, uma plataforma global de processamento de pagamentos online.

Para simplificar a implementação, foram utilizados Stripe Payment Links.

Cada pacote de créditos possui um link de pagamento exclusivo, que abre diretamente o checkout seguro do Stripe.

Quando o usuário clica em um botão de compra no site, ele é redirecionado para o checkout do Stripe.

O Stripe suporta automaticamente os seguintes métodos de pagamento:

- Pix
- cartão de crédito
- Apple Pay
- Google Pay

Após a confirmação do pagamento, o usuário recebe um email automático com o recibo da transação.

---

Integração com Stripe

A integração foi realizada de forma simples, sem necessidade de backend personalizado.

Cada botão de compra no site contém um link direto para o checkout do Stripe.

Exemplo simplificado:

<a href="https://buy.stripe.com/EXEMPLO">
<button>Comprar 10 créditos</button>
</a>

Quando clicado, o usuário é redirecionado para o checkout do Stripe, onde pode concluir o pagamento com segurança.

---

Versionamento com GitHub

O código do site foi armazenado em um repositório no GitHub para controle de versão e colaboração.

Fluxo utilizado:

1. Criação do repositório
2. Inicialização do Git no projeto
3. Commit inicial do código
4. Envio do projeto para o repositório remoto

Principais comandos utilizados:

git init
git add .
git commit -m "Initial commit"
git push

Isso permite acompanhar alterações no projeto e facilita atualizações futuras.

---

Deploy com Vercel

A hospedagem do site foi realizada utilizando a plataforma Vercel.

O processo de deploy foi feito da seguinte forma:

1. Conectar a conta do Vercel ao GitHub
2. Importar o repositório do projeto
3. Configurar o deploy automático
4. Realizar o primeiro deploy

O Vercel detecta automaticamente alterações no repositório e realiza deploy contínuo sempre que um novo commit é enviado.

Isso garante que o site esteja sempre atualizado.

---

Estrutura de Arquivos

A estrutura básica do projeto é semelhante a:

/
index.html
style.css
script.js
images/

Essa estrutura simples permite fácil manutenção e compatibilidade com hospedagem estática.

---

Objetivo Educacional

Além de servir como ferramenta de arrecadação para a turma, o projeto também tem valor educacional, pois envolve:

- desenvolvimento web
- uso de ferramentas de inteligência artificial
- integração com sistemas de pagamento
- controle de versão com Git
- deploy em ambiente de produção

---

Contato

Para dúvidas sobre o projeto ou sobre a compra de créditos:

year92026@gmail.com

---

Licença

Este projeto foi desenvolvido para fins educacionais e para arrecadação de fundos da turma Year 9 2026.