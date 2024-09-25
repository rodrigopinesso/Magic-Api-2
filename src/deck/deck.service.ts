import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from './schemas/deck.schema';
import { createDeckDto } from './dto/createdeck.dto'; // Supondo que você tenha um DTO
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class DeckService {
  constructor(
    @InjectModel(Deck.name)
    private deckModel: Model<Deck>,
  ) {}
 
  async findAll(): Promise<Deck[]> {
    return await this.deckModel.find().exec();
  }

  async create(createDeckDto: createDeckDto, user: User): Promise<Deck> {
    
    const data = Object.assign(Deck, {user: user._id})
    
    const createdDeck = new this.deckModel(createDeckDto);
    return await createdDeck.save();
  }

  async findById(id: string): Promise<Deck> {
    const deck = await this.deckModel.findById(id).exec();

    if (!deck) {
      throw new NotFoundException('Deck não encontrado.');
    }

    return deck;
  }

  async updateById(id: string, updateDeckDto: createDeckDto): Promise<Deck> {
    const updatedDeck = await this.deckModel.findByIdAndUpdate(id, updateDeckDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedDeck) {
      throw new NotFoundException('Deck não encontrado.');
    }

    return updatedDeck;
  }

  async deleteById(id: string): Promise<Deck> {
    const deletedDeck = await this.deckModel.findByIdAndDelete(id).exec();

    if (!deletedDeck) {
      throw new NotFoundException('Deck não encontrado.');
    }

    return deletedDeck;
  }
}
