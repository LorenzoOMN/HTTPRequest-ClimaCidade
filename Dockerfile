# Usa o Node 20 (versão moderna e recomendada para o Vite)
FROM node:20-alpine

# Cria a pasta do app dentro do Docker
WORKDIR /app

# Copia os arquivos de configuração de dependências
COPY package*.json ./

# Instala as dependências (incluindo o TypeScript e os tipos do React)
RUN npm install

# Copia o resto dos arquivos do projeto (incluindo tsconfig.json, src, etc.)
COPY . .

# Abre a porta do Vite
EXPOSE 5173

# Roda o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]
