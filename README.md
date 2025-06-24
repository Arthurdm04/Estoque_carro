# Estoque_carro
# WebVeículos

## 📝 Descrição do Aplicativo

O **WebVeículos** é um sistema projetado para otimizar o gerenciamento de estoque de veículos por lojistas e proporcionar uma plataforma prática para clientes e vendedores consultarem veículos disponíveis para compra. 

### Objetivo
Facilitar o gerenciamento de estoque de veículos e a consulta de automóveis para compra. 

### Público-Alvo
Lojistas de veículos novos e seminovos. 
Clientes interessados na compra de veículos. 

### Contexto de Uso
Lojistas utilizarão o sistema para cadastrar e manter os dados de seus veículos atualizados. [cite_start]Clientes poderão buscar e visualizar informações de carros para compra ou negociação dentro da loja. 

## ✨ Funcionalidades

O sistema WebVeículos oferece as seguintes funcionalidades principais:

**Cadastro e Login:** Permite o cadastro de funcionários e login facilitado, além de funcionalidades de login/cadastro para lojistas e clientes. 
**Cadastro de Veículos:** Lojistas podem cadastrar veículos com fotos e informações detalhadas. 
**Visualização e Filtro de Veículos:** Clientes podem visualizar a lista de veículos, com opções de filtro por marca, modelo, ano, preço, entre outros. 
**Detalhes do Veículo:** Clientes podem visualizar informações completas de um veículo, incluindo fotos e preço, e enviar mensagens ao lojista. 
**Remoção de Veículos:** Permite que lojistas removam veículos do anúncio.

## 🚀 Tecnologias Utilizadas

Este projeto está sendo desenvolvido utilizando as seguintes tecnologias front-end:

* **HTML5:** Para a estrutura e conteúdo das páginas web.
* **CSS3:** Para a estilização e responsividade da interface.
* **JavaScript:** Para a interatividade e lógica de front-end, incluindo máscaras de input e funcionalidades de formulário.
* **Font Awesome:** Para ícones visuais (como o olho da senha e o cadeado de cargo).

## 📁 Estrutura de Pastas

O projeto segue um padrão de organização inspirado no modelo MVC (Model-View-Controller) para melhor separação de responsabilidades e manutenibilidade:

├── app/                  # Lógica da aplicação
│   ├── controllers/      # Controladores JavaScript (ex: script.js, cadastro.js)
│   └── models/           # Modelos JavaScript (ex: User.js - para validação de dados)
│
├── public/               # Ativos estáticos acessíveis publicamente
│   ├── css/              # Folhas de estilo (ex: style.css, cadastro.css)
│   ├── js/               # Scripts JavaScript globais ou utilitários (se houver)
│   └── assets/           # Imagens, ícones, fontes (ex: logo.png, favicon.ico)
│
├── views/                # Arquivos HTML da interface (Visões)
│   ├── cadastro.html     # Tela de Cadastro
│   └── index.html        # Tela de Login
│
└── README.md             # Este arquivo

## ⚙️ Como Usar (Para Desenvolvedores)

Para configurar e rodar o projeto em sua máquina local:

1.  **Clone o Repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd WebVeiculos
    ```
2.  **Abra os Arquivos:**
    Simplesmente abra os arquivos `views/index.html` ou `views/cadastro.html` no seu navegador de preferência.

    *Nota: Como este é um projeto puramente front-end, não é necessário um servidor web para rodar, mas para simular funcionalidades de backend (como cadastro real de usuários ou veículos), você precisaria integrar com uma API futuramente.*

## 🎨 Protótipos de Interface (Figma)

Os protótipos de interface foram desenvolvidos no Figma e servem como referência visual para o design e as funcionalidades do sistema. 

* [Tela Inicial / Login](![image](https://github.com/user-attachments/assets/cc2225d7-63b2-47f9-b8c2-677e586778d0)
) 
* [Tela de Cadastro](image_941166.png) 
* [Tela de Filtro de Veículo](image_94677f.png) 
* [Tela de Cadastro de Veículo](image_94677f.png) 
* [Tela de Remoção de Veículos](image_94677f.png) 

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, por favor:

1.  Faça um `fork` do projeto.
2.  Crie uma `branch` para sua feature (`git checkout -b feature/minha-feature`).
3.  Faça suas alterações e `commit` (`git commit -m 'feat: minha nova feature'`).
4.  Envie para o `branch` original (`git push origin feature/minha-feature`).
5.  Abra um `Pull Request`.

