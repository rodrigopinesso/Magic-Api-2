import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly rabbitmqService: RabbitmqService){}

  async getHello() { //getHello(): string
    this.rabbitmqService.instance.send('', {});//envia informação para o rmq
    this.rabbitmqService.instance.send('', {}).pipe;//espera uma função ascy, recupera as info mandada para o rabit

    // return 'Hello World!';
  }
}
