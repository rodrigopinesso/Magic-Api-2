import { Injectable } from '@nestjs/common';

@Injectable()
export class RomqProcessService {
  getHello(): string {
    return 'Hello World!';
  }
}
