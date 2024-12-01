import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class RomqProcessService {
  
  async defaultNestJs(data:any, context: RmqContext){
    console.log(data);

    // save database | request new api
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
   // save database | new api
    channel.ack(originalMsg);
  }

}
