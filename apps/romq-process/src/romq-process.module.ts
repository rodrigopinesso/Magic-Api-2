import { Module } from '@nestjs/common';
import { RomqProcessController } from './romq-process.controller';
import { RomqProcessService } from './romq-process.service';

@Module({
  imports: [],
  controllers: [RomqProcessController],
  providers: [RomqProcessService],
})
export class RomqProcessModule {}
