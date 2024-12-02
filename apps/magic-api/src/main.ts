import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cpus } from 'os';
const cluster = require('cluster');

async function bootstrap() {
  // Verifica se o processo atual é o primário (master) no cluster
  const isPrimary = cluster.isPrimary || cluster.isMaster;  

  if (isPrimary) {
    const numCPUs = cpus().length; // Obtém o número total de CPUs disponíveis
    console.log(`Master process started. Forking ${numCPUs} workers...`);
    
    // Cria um processo para cada CPU disponível
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork(); 
    }

    // Listener para reiniciar o worker caso ele falhe
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
      cluster.fork();
    });
  } else {
    // Inicia o aplicativo NestJS em um processo de trabalho
    const app = await NestFactory.create(AppModule);
    
    // Configurações de CORS específicas para permitir origens locais
    app.enableCors({
      origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Define origens permitidas
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Define métodos permitidos
      credentials: true, // Permite envio de credenciais
    });

    // Configura a porta de escuta. Comentário ajustado para melhorar a clareza
    await app.listen(3000); // Estava apenas "listen(3000)"
    console.log(`Worker process started on port 3000. PID: ${process.pid}`);
  }
}

bootstrap();
