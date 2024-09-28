import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Deck } from './schemas/deck.schema';
import { DeckService } from './deck.service';
import { createDeckDto } from './dto/create-deck-dto';
import { updateDeckDto } from './dto/update-deck-dto';
import { Query as ExpressQuery } from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';


@Controller('decks')
export class DeckController {

  constructor(private deckService: DeckService) {}

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
  ): Promise<Deck> {
      return this.deckService.createDeckWithCommander(commanderName, deckName);
  }
  
  @Get('listAllDecks')
  @Roles(Role.Admin, Role.Moderator)
  @UseGuards(AuthGuard(), RolesGuard)
  async getAllDecks(): Promise<Deck[]> {
      return this.deckService.findAll();
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
  
  @Put('updateDeck/:id')
  @UseGuards(AuthGuard())
  async updateDeck(
      @Param('id')
      id: string,
      @Body()
      deck: updateDeckDto,
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