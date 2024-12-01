# Use a imagem Node.js como base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto
COPY . .

# Instale as ferramentas necessárias para compilar TypeScript
RUN npm install -g @nestjs/cli typescript

# Compile o código TypeScript
RUN npm run build

# Exponha a porta 3000
EXPOSE 3000

# Comando de inicialização da aplicação
CMD ["npm", "run", "start"]
