# Usa a imagem oficial do Node.js
FROM node:22-alpine


# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para o container
COPY . .

# Expõe a porta do Vite (normalmente 5173)
EXPOSE 5173

# Comando padrão para rodar o Vite
CMD ["npm", "run", "dev", "--", "--host"]
