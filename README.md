**PokéAPI React TS Pokedex**

Este projeto é uma aplicação desenvolvida em React e TypeScript utilizando Vite, styled-components e axios para consumir a PokeAPI. Ele exibe uma lista de 100 Pokémons na tela principal, permite busca por nome, e oferece uma página de detalhes com informações adicionais.

##  Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

* Node.js (versão 16 ou superior)
* npm (gerenciador de pacotes do Node)
* Git (para versionamento)

##  Clonando o repositório

```bash
git clone https://github.com/DominiAcco/meal_catalogue
cd meal_catalogue
```



##  Instalação das dependências

Instale todas as dependências do projeto rodando:

```bash
npm install
```

Isso instalará:

* React e ReactDOM
* TypeScript
* Vite
* styled-components e @types/styled-components
* axios
* react-router-dom e @types/react-router-dom


## Estrutura do projeto

```
src/
├── components/      # COMPONENTES REUTILIZÁVEIS
    ├── Header
        ├── index.tsx
        ├── styles.ts
    ├── PokemonCard
        ├── index.tsx
        ├── styles.ts
    
├── pages/           # Telas (Home e PokeDetails)
│   ├── Home.tsx
│   ├── PokeDetails.tsx
│   └── PokeDetails.styled.ts
├── services/
│   └── Api.ts       # Configuração do axios com baseURL
├── styles/
│   └── GlobalStyle.ts
├── App.tsx          # Configuração de rotas
├── main.tsx         # Bootstrapping do React e Vite
└── vite.config.ts   # Configuração do Vite
```



##  Como executar o projeto

Após instalar as dependências:

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Acesse a aplicação no navegador:

Abra o navegador em `http://localhost:5173` (ou a porta exibida no terminal).

3. Utilize a busca para procurar Pokémons pelo nome e clique em qualquer um para ver os detalhes.


