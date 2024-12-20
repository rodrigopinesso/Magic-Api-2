import { Module } from '@nestjs/common';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckSchema } from './schemas/deck.schema';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10,
      max: 100,
    }),
    AuthModule,
    MongooseModule.forFeature([{name: 'Deck', schema: DeckSchema}])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}