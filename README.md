# 🚀 Nome do Seu Projeto

Um site usando docker, vite, react, ts, entre outras para mostrar ao usuario qual o clima da cidade pesquisada.

## 🛠️ Pré-requisitos

Antes de iniciar, você precisa das seguintes ferramentas instaladas:
* **Node.js** (versão 18 ou superior) - *Apenas para a opção com Vite nativo*
* **Docker Desktop** (Windows/Mac) ou **Docker Engine** (Linux)
* **WSL2 com Ubuntu** (Caso esteja no Windows e prefira o ambiente Linux)

---

## ⚙️ Arquitetura e Ajustes de Ambiente (Vite + Docker)

Para que o ambiente de desenvolvimento funcione em harmonia utilizando Docker e Docker Compose, foram necessários ajustes específicos no arquivo `vite.config.ts`. 

Sem esses ajustes, o isolamento do container impede o acesso ao app e quebra a atualização automática de código (Hot Reload).

### 🔍 Entendendo as configurações:

1. **`host: '0.0.0.0'`**: Por padrão, o Vite roda em `127.0.0.1` (localhost interno do container). Configurar como `0.0.0.0` permite que o Vite responda a requisições externas, possibilitando que o mapeamento de portas do `docker-compose.yml` (`5173:5173`) funcione no navegador da sua máquina física.
2. **`usePolling: true`**: Como o Docker está rodando via WSL/Windows, o sistema de eventos de arquivos nativo não é compartilhado perfeitamente entre os sistemas operacionais. O *Polling* força o Vite a checar manualmente as alterações nos arquivos, garantindo que o **Hot Reload** funcione instantaneamente enquanto você digita no VS Code.

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173,
    watch: {
      usePolling: true, 
    },
  },
})
```

### Passo a passo para as variáveis de ambiente:

1. Na raiz do projeto, crie o seu arquivo `.env`:
   ```bash
   cp .env.example .env
   ```
2. Abra o arquivo `.env` e preencha as variáveis necessárias:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

---

## 🚀 Como Iniciar o Projeto

Escolha a forma que preferir para rodar o projeto em sua máquina:

### Opção 1: Via Docker no Ubuntu (WSL2) - Recomendado para Windows

Se você usa Windows com WSL2 e quer a máxima performance:

1. Abra o terminal do seu **Ubuntu (WSL)**.
2. Garanta que a integração está ativa no Docker Desktop (*Settings > Resources > WSL Integration > Ative o Ubuntu*).
3. Clone o repositório dentro do ambiente WSL e acesse a pasta:
   ```bash
   git clone https://github.com
   cd seu-repositorio
   ```
4. Suba os containers do Docker:
   ```bash
   docker compose up -d
   ```
5. O projeto estará disponível em `http://localhost:5173`.

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

Se você prefere rodar o projeto nativamente na sua máquina:

1. Abra o terminal na pasta do projeto clonado.
2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
4. Acesse o endereço exibido no terminal, geralmente `http://localhost:5173/`.

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

* [Vite](https://vitejs.dev) - Build tool e Servidor de Desenvolvimento
* [React](https://react.dev) - Biblioteca para construção de interfaces
* [TypeScript](https://typescriptlang.org) - Tipagem estática para JavaScript
* [CSS3](https://mozilla.org) - Estilização nativa (Pure CSS)
* [Docker](https://docker.com) - Containerização de ambiente
* [WSL2 / Ubuntu](https://microsoft.com) - Subsistema Linux para Windows

---

✒️ **Autor:** [Lorenzo](https://github.com/LorenzoOMN)
