import { Controller, Get } from '@nestjs/common';

import { RomqProcessService } from './romq-process.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class RomqProcessController {
  constructor(private readonly romqProcessService: RomqProcessService) {}

  @MessagePattern('default-nest-rmq')
  async defaultNestJs(@Payload() data:any, @Ctx() context: RmqContext){
    return this.romqProcessService.defaultNestJs(data, context);  
  }

}
