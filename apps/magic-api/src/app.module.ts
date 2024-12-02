import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './deck/deck.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RabbitmqModule } from './../rabbitmq/rabbitmq.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, // Torna as variáveis de ambiente disponíveis globalmente
    }),
    MongooseModule.forRoot(process.env.DB_URI), // Conexão com o MongoDB
    DeckModule,
    AuthModule,
    RabbitmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
