import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbitmq:5672'],
        //   noAck: false,
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [RabbitmqService],
  exports:   [RabbitmqService],
})
export class RabbitmqModule {}
