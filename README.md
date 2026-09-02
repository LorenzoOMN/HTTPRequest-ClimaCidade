# 🚀 HTTPRequest ClimaCidade

Uma breve descrição de uma frase sobre o que o seu projeto faz e qual problema ele resolve.

## 🛠️ Pré-requisitos

Antes de iniciar, você precisa das seguintes ferramentas instaladas:
* **Node.js** (versão 18 ou superior) - *Apenas para a opção com Vite nativo*
* **Docker Desktop** (Windows/Mac) ou **Docker Engine** (Linux)
* **WSL2 com Ubuntu** (Caso esteja no Windows e prefira o ambiente Linux)

---

## 🚀 Como Iniciar o Projeto

Escolha a forma que preferir para rodar o projeto em sua máquina:

### Opção 1: Via Docker no Ubuntu (WSL2) - Recomendado para Windows

Se você usa Windows com WSL2 e quer a máxima performance do ecossistema Linux:

1. Abra o terminal do seu **Ubuntu (WSL)**.
2. Garanta que a integração está ativa no Docker Desktop em: *Settings > Resources > WSL Integration > Ative o Ubuntu*.
3. Clone o repositório dentro do ambiente WSL e acesse a pasta:
   ```bash
   git clone https://github.com
   cd seu-repositorio
   ```
4. Suba os containers do Docker:
   ```bash
   docker compose up -d
   ```
5. O projeto estará disponível no seu navegador em `http://localhost:5173` (ou na porta configurada).

### Opção 2: Via Docker Desktop (Prompt/PowerShell/Mac)

Se prefere rodar o Docker diretamente pelo terminal padrão do seu sistema operacional:

1. Certifique-se de que o aplicativo **Docker Desktop** está aberto e rodando.
2. Abra o seu terminal (PowerShell, CMD ou Terminal do Mac).
3. Clone o repositório e acesse a pasta:
   ```bash
   git clone https://github.com
   cd seu-repositorio
   ```
4. Inicialize os containers:
   ```bash
   docker-compose up -d
   ```
5. Acesse o projeto em `http://localhost:5173`.

### Opção 3: Diretamente pelo Vite (Sem Docker)

Se você não quer usar containers e prefere rodar o projeto nativamente na sua máquina:

1. Abra o terminal na pasta do projeto clonado.
2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
4. O terminal exibirá o endereço local, geralmente `http://localhost:5173/`.

---

## 🛑 Como Parar o Projeto

* **Se iniciou via Docker:**
  ```bash
  docker compose down
  ```
* **Se iniciou via Vite:**
  Pressione `Ctrl + C` no terminal onde o processo está rodando.

---

## 🛠️ Tecnologias Utilizadas

* [Vite](https://vitejs.dev) - Build tool e Servidor de Desenv.
* [Docker](https://docker.com) - Containerização
* [WSL2 / Ubuntu](https://microsoft.com) - Ambiente Linux no Windows
* [Sua Tecnologia] - (Ex: React, Vue, TypeScript, Tailwind)

---

✒️ **Autor:** [Seu Nome](https://github.com)
