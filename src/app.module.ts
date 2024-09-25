import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './deck/deck.module';
import { AuthModule } from './auth/auth.module';
import { DeckCreatorModule } from './deck-creator/deck-creator.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    DeckModule,
    AuthModule,
    DeckCreatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

