import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cpus } from 'os';
const cluster = require('cluster');

async function bootstrap() {
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
    
    app.enableCors({
      origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });

    await app.listen(3000);
    console.log(`Worker process started on port 3000. PID: ${process.pid}`);
  }
}

bootstrap();
