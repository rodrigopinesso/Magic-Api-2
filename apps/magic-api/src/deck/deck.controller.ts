import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, Req, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { Colors, Deck } from './schemas/deck.schema';
import { DeckService } from './deck.service';
import { createDeckDto } from './dto/create-deck-dto';
import { updateDeckDto } from './dto/update-deck-dto';
import { AuthGuard } from '@nestjs/passport';
// import { Roles } from 'src/auth/decorators/roles.decorator';
// import { Roles } from 'src/auth/decorators/roles.decorator';
// import { Role } from 'src/auth/enums/role.enum';
// import { RolesGuard } from 'src/auth/guards/roles.guard';
import { validateCommanderDeck } from './validate/validate-deck';
import { CommanderDeckDto } from './dto/import-deck.dto';
import { CacheInterceptor, CACHE_MANAGER, CacheKey } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';

 @Controller('decks')
 @UseInterceptors(CacheInterceptor)
 export class DeckController {

    constructor(
      private deckService: DeckService,
      @Inject(CACHE_MANAGER) private cacheManager: Cache,) {}

  @Get('commanderInfo')
  async getCommander(@Query('name') name: string): Promise<any> {
      if (!name) {
          throw new Error('Missing "name" query parameter');
      }
      return this.deckService.fetchCommander(name);
  }
  
  @Post('createDeckWithCommander')
  @UseGuards(AuthGuard())
  async createDeckWithCommander(
    @Query('commanderName') commanderName: string,
    @Query('deckName') deckName: string,
    @Req() req: any
  ): Promise<Deck> {
    const userId = req.user.id;
  
    if (!commanderName || !deckName) {
      throw new BadRequestException("Comandante e nome do deck são obrigatórios.");
    }
  
    try {
      const newDeck = await this.deckService.createDeckWithCommander(commanderName, deckName, userId);
      await this.cacheManager.del(`myDecks_${userId}`);
      return newDeck;
    } catch (error) {
      throw new BadRequestException("Erro ao criar deck.");
    }
  }
  
 @Get('allDecks')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard(), RolesGuard)
  async getAllDecks(): Promise<Deck[]> {
    return this.deckService.findAll()
  }

  @Post('createCustomDeck')
  @UseGuards(AuthGuard())
  async createDeck(
      @Body()
      deck: createDeckDto,
  ): Promise<Deck> {
      return this.deckService.create(deck);
  }
  
  @Get('decks/:id')
  async getDeckById(
      @Param('id')
      id: string,
  ): Promise<Deck> {
      return this.deckService.findById(id);
  }
  
  @Get('myDeck')
  @UseGuards(AuthGuard()) 
    async getMyDecks(@Request() req: any) {
    const userId = req.user.id; 
    const cacheKey = `myDecks_${userId}`;
    
    const cachedDecks = await this.cacheManager.get(cacheKey);
    if (cachedDecks) {
        return cachedDecks;
    }

    const decks = await this.deckService.findDecksByUserId(userId);
    await this.cacheManager.set(cacheKey, decks);

    return decks;
}


  @Post('importDeck')
  @UseGuards(AuthGuard())
  importDeck(@Body() commanderDeckDto: CommanderDeckDto) {
    const deck = {
      commanderName: commanderDeckDto.commanderName,
      cards: commanderDeckDto.cards,
      colors: commanderDeckDto.colors,
    };

    if (!validateCommanderDeck(deck)) {
      return { message: 'Baralho inválido de Commander' };
    }

    return { message: 'Baralho importado com exito', deck: commanderDeckDto };
  }
 
  @Put('updateDeck/:id')
  @UseGuards(AuthGuard())
  async updateDeck(
    @Param('id') id: string,
    @Body() deck: updateDeckDto, 
    ): Promise<Deck> {
    return this.deckService.updateById(id, deck); 
}

  @Delete('deleteDeck/:id')
  @UseGuards(AuthGuard())
  async deleteDeck(
      @Param('id')
      id: string,
  ): Promise<Deck> {
      return this.deckService.deleteById(id);
  } 
 }   
