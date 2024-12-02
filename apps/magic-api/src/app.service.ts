import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor ( private readonly rabbitmqService: RabbitmqService){}

 async defaultNestJs() {
  // Emit a default message to RabbitMQ
  this.rabbitmqService.instance.emit('default-nest-rmq', {
    message: 'Nova mensagem: RMQ '
  });

  // Uncomment the following line to enable asynchronous RabbitMQ response handling
  // this.rabbitmqService.instance.send('', {}).pipe();

  // Return statement (currently disabled)
  // return 'Hello World!';
}
