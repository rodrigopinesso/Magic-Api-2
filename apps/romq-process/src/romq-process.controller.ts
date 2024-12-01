import { Controller, Get } from '@nestjs/common';
import { RomqProcessService } from './romq-process.service';

@Controller()
export class RomqProcessController {
  constructor(private readonly romqProcessService: RomqProcessService) {}

  @Get()
  getHello(): string {
    return this.romqProcessService.getHello();
  }
}
