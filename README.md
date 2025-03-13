# 🥗 Healthy Food
<br>


Bem-vindo ao repositório do Healthy Food!
Este site foi criado como parte do Full Stack Week, um projeto de aprendizado para aprimorar minhas habilidades em desenvolvimento web. O objetivo é oferecer uma plataforma onde os usuários possam encomendar marmitas saudáveis e deliciosas, preparadas com ingredientes frescos e selecionados. Ideal para quem busca uma alimentação equilibrada sem abrir mão do sabor!
<br><br>

## 🎯 Objetivo

Este portfólio foi desenvolvido para:

- **Aprendizado** : Aprofundar meus conhecimentos em desenvolvimento full stack, aplicando conceitos de front-end e back-end.

- **Prática** : Implementar funcionalidades como catálogo de produtos, carrinho de compras e integração com pagamentos.

- **Portfólio** : Demonstrar minhas habilidades técnicas e criativas, agregando valor ao meu currículo como desenvolvedor.

- **Impacto** : Criar uma solução prática e útil para pessoas que buscam uma alimentação saudável e conveniente.
<br><br>

## 🚀 Tecnologias Utilizadas

Este portfólio foi desenvolvido utilizando as mais recentes tecnologias do ecossistema web:

- **React** : Biblioteca JavaScript para construção de interfaces de usuário interativas e dinâmicas.

- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a qualidade e a manutenção do código.

- **Next.js**: Framework React para construção de aplicações web modernas, performáticas e com renderização do lado do servidor (SSR).

- **Node.js**: Ambiente de execução JavaScript para construir a lógica do back-end e APIs.

- **PostgreSQL**: Banco de dados relacional robusto e escalável para armazenar informações do projeto.

- **Prisma**: ORM (Object-Relational Mapping) para gerenciar e interagir com o banco de dados de forma intuitiva e segura.

- **Tailwind CSS**: Framework CSS utilitário para estilização rápida, responsiva e altamente customizável.
<br><br>

## 📌 Funcionalidades

Cardápio Completo: Explore nossas opções de pratos saudáveis, divididos em categorias:

- 🥗 **Pratos do Dia a Dia**: Opções como batata doce, grão-de-bico e outras refeições balanceadas.

- 🍗 **Pratos com Carne**: Deliciosas opções com frango, porco e outras carnes.

- � **Porções de Salada**: Saladas frescas e variadas para acompanhar sua refeição.

- 🥤 **Bebidas**: Sucos naturais, águas aromatizadas e outras opções refrescantes.

- 🍰 **Sobremesas**: Doces saudáveis para finalizar sua refeição com chave de ouro.

**Pedido Online**: Faça seu pedido de forma rápida e prática, escolhendo entre retirar no local ou receber em casa (se disponível).

**Pagamento Facilitado**: Aceitamos pagamentos via cartão (débito ou crédito) para maior comodidade.

*Experiência do Usuário*:

📱 **Layout Responsivo**: Navegação otimizada para dispositivos móveis e desktop.

🛒 **Carrinho de Compras**: Adicione itens ao carrinho e revise seu pedido antes de finalizar.

📍 **Retirada no Local**: Escolha a opção de retirar pessoalmente e aproveite a praticidade.

*Informações Nutricionais*: Detalhes sobre os ingredientes e valores nutricionais de cada prato, para você fazer escolhas conscientes..
<br><br>

## 📂 Estrutura do Projeto  
  
O projeto está organizado da seguinte forma:  
````seu-repositorio/
├── prisma/              # Configurações e modelos do Prisma (banco de dados)
│   ├── schema.prisma    # Arquivo de schema do Prisma
│   └── migrations/      # Migrações do banco de dados
├── public/              # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── app/             # Páginas e rotas da aplicação (se estiver usando Next.js ou similar)
│   ├── components/      # Componentes reutilizáveis da interface
│   ├── data/            # Dados estáticos, como JSONs ou configurações
│   ├── helpers/         # Funções utilitárias e auxiliares
│   └── lib/             # Bibliotecas ou módulos reutilizáveis (como chamadas à API)
├── README.md            # Este arquivo
└── package.json         # Dependências do projeto
````
<br><br>

## 🌐 Acesse o Portfólio

Você pode acessar o portfólio online através do link:  
🔗 <a href="https://mcdonald-lemon.vercel.app/fsw-donalds" target="_blank">Healthy Food</a>
<br><br><br><br>  


## 🖥 Project Images   
  <br>

  ![Apresentação](public/tela001.png)
  <br>

  ![Tela Inicial Cardápio](public/tela002.png)
  <br>

  ![Cardápio-Carnes](public/tela003.png)
  <br>

  ![Cardápio-Porções](public/tela004.png)
  <br>

  ![Cardápio-Bebidas](public/tela005.png)
  <br>

  ![Cardápio-Sobremesa](public/tela006.png)
  <br>

  ![Item Detalhado](public/tela007.png)
  <br>

  ![Carrinho de Pedidos](public/tela008.png)
  <br>

  ![Inserindo Informações para Finalização de Pedido](public/tela009.png)
  <br>

  ![Gateway de Pagamento](public/tela010.png)
  <br>

## 📝 Como Executar Localmente
Se você deseja rodar o projeto localmente, siga os passos abaixo:

### Clone o repositório:
````bash
git clone https://github.com/richardcastrogois/mcdonald
````
### Instale as dependências:
````bash
cd <nome-da-pasta-do-repositorio>
npm install
````
<br><br>

### Configure o banco de dados:
- Crie um banco de dados PostgreSQL **(local ou em um serviço como Supabase ou ElephantSQL)**.
- Renomeie o arquivo **.env.example** para **.env** e preencha as variáveis de ambiente:
````bash
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
````
- **Substitua** USUARIO, SENHA e NOME_DO_BANCO pelas credenciais do seu banco de dados.

## Execute as migrações do Prisma:

````bash
npx prisma migrate dev --name init
````

### Inicie o servidor de desenvolvimento:
````bash
npm dev
````

### Acesse o projeto no navegador:

http://localhost:3000

<br><br>

## 📬 Contato

Se quiser entrar em contato para oportunidades ou colaborações, me encontre em:

📧 Email: [dev.richardgois@gmail.com](mailto\:dev.richardgois@gmail.com)\
💼 LinkedIn: [Richard Castro](https://www.linkedin.com/in/richard-castro-00a6b42bb/)\
🐙 GitHub: [richardcastrogois](https://github.com/richardcastrogois)

---
<br><br>

Desenvolvido com 💙 e dedicação!