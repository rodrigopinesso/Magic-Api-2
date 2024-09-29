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
    await app.listen(3000);
  
  }
}
bootstrap();
