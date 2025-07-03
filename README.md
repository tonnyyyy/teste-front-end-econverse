# Teste Front-end Econverse - Tony Gomes.

O projeto foi criado utilizando React, Vite e TypeScript. Segue as instruções para configurar e executar o app:


## Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* [npm](https://www.npmjs.com/)


## Instalação

1. Clone o repositório:

   ```bash
    https://github.com/tonnyyyy/teste-front-end-econverse.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd caminho/do/repositorio
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```


## Scripts para executar

* **Iniciar o servidor de desenvolvimento**

  ```bash
  npm run dev
  ```

  Executa o app em modo de desenvolvimento, por padrão em [http://localhost:5173](http://localhost:5173). 

* **Construir para produção**

  ```bash
  npm run build
  ```

  Gera o build otimizado do app na pasta `dist`. (para executar em produçãpo)


## Arquitetura do projeto

```text
├── public/            # Arquivos estáticos
├── src/               # Código-fonte
│   ├── assets/        # Imagens, fontes etc.
│   ├── components/    # Componentes React
│   ├── types/         # Tipagens globais
│   ├── styles/        # Arquivos CSS/SASS
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Entrada do app
├── vite.config.ts     # Configuração do Vite
├── tsconfig.json      # Configuração do TypeScript
└── package.json       # Dependências e scripts
```

---