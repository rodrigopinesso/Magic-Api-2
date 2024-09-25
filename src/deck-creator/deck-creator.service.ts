import { Injectable, NotFoundException } from '@nestjs/common';
import fetch from 'node-fetch';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Deck } from '../deck/schemas/deck.schema';

@Injectable()
export class DeckCreatorService {
  constructor(
    @InjectModel(Deck.name) private readonly deckModel: Model<Deck>,
  ) {}

  async fetchCommander(commanderName: string): Promise<any> {
    const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(commanderName)}`;
    console.log(`Fetching commander from URL: ${url}`);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch commander. Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response from Scryfall API:', data);
      return data;
    } catch (error) {
      console.error(`Error fetching commander: ${error.message}`);
      throw new NotFoundException('Erro ao buscar comandante.');
    }
  }

  async fetchCardsByColors(colors: string[]): Promise<string[]> {
    const colorQuery = colors.join(',');
    const cards: string[] = [];
    let page = 1;

    while (cards.length < 99) {
      const response = await fetch(`https://api.scryfall.com/cards/search?q=color%3D${colorQuery}&unique=cards&order=random&page=${page}`);
      const data = await response.json();

      for (const card of data.data) {
        if (card.type_line.includes('Basic Land')) {
          cards.push(card.name);
          if (cards.length === 99) break;
          continue;
        }

        const isRepeatable = card.oracle_text && card.oracle_text.includes('A deck can have any number of cards named');
        if (!isRepeatable && cards.includes(card.name)) continue;

        cards.push(card.name);
        if (cards.length === 99) break;
      }

      if (!data.has_more) break;  // Parar se não houver mais páginas de resultados
      page++;
    }

    return cards;
  }

  async createDeckWithCommander(commanderName: string, deckName: string): Promise<Deck> {
    // Fetch commander data
    console.log('Fetching commander...');
    const commander = await this.fetchCommander(commanderName);

    if (!commander) {
      throw new NotFoundException('Comandante não encontrado');
    }

    // Fetch cards by commander colors
    console.log('Fetching cards...');
    const commanderColors = commander.colors;
    const cards = await this.fetchCardsByColors(commanderColors);

    // Create and save deck
    console.log('Creating deck...');
    const deck = new this.deckModel({
      name: deckName,
      commanderName: commander.name,
      colors: commanderColors,
      cards: cards,
    });

    console.log('Saving deck...');
    const savedDeck = await deck.save();

    console.log('Deck saved:', savedDeck);
    return savedDeck;
  }
}
