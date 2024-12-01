import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor ( private readonly rabbitmqService: RabbitmqService){}

  async defaultNestJs() { //getHello(): string
    this.rabbitmqService.instance.emit('default-nest-rmq', {
      message: 'Nova mensagem: RMQ '
    });//envia informação para o rmq
    // this.rabbitmqService.instance.send('', {}).pipe();//espera uma função ascy, recupera as info mandada para o rabit (passar delei)
    // return 'Hello World!';
  }
}
