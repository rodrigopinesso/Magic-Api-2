import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('default-nest') // rota GET 
  async defaultNestJs() {
    return this.appService.defaultNestJs(); 
  }
}
