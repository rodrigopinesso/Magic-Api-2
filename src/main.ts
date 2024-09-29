import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cpus } from 'os';
const cluster = require('cluster');

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS
  app.enableCors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Adicione o seu front-end aqui
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
=======
  
  const isPrimary = cluster.isPrimary || cluster.isMaster;  
  
  if (isPrimary) {
    const numCPUs = cpus().length;
    console.log(`Master process started. Forking ${numCPUs} workers...`);
    
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork(); 
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
      cluster.fork();
    });
  } else {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  
  }
>>>>>>> 25ce378073dd4a793fda957104c68383301a7dc2
}
bootstrap();