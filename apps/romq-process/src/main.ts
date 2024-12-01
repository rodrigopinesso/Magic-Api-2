import { NestFactory } from '@nestjs/core';
import { RomqProcessModule } from './romq-process.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
   
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(RomqProcessModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      noAck : false,
      queueOptions: {
      durable: false
     },
    },
  });

  await app.listen();
}
bootstrap();
