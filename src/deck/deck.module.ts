import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { DeckSchema } from './schemas/deck.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }])
  ],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}