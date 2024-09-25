import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import { DeckService } from './deck.service';
  import { createDeckDto} from './dto/createdeck.dto';
  import { UpdateDeckDto} from './dto/updatedeck.dto';
  import { Deck } from './schemas/deck.schema';
import { AuthGuard } from '@nestjs/passport';
  
  
  @Controller('decks')
  export class DeckController {
    constructor(private DeckService: DeckService) {}
  
    @Get()
    async getAllDecks(): Promise<Deck[]> {
      return this.DeckService.findAll();
    }
  
    @Post()
    @UseGuards(AuthGuard())
    async createDeck(
      @Body()
      deck: createDeckDto,
      @Req() req
    ): Promise<Deck> {
     

      return this.DeckService.create(deck, req.user);
    }
  
    @Get(':id')
    async getDeck(
      @Param('id')
      id: string,
    ): Promise<Deck> {
      return this.DeckService.findById(id);
    }
  
    @Put(':id')
    async updateDeck(
      @Param('id')
      id: string,
      @Body()
      Deck: UpdateDeckDto,
    ): Promise<Deck> {
      return this.DeckService.updateById(id, Deck);
    }
  
    @Delete(':id')
    async deleteDeck(
      @Param('id')
      id: string,
    ): Promise<Deck> {
      return this.DeckService.deleteById(id);
    }
  }