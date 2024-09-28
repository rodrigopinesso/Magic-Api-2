export function validateCommanderDeck(deck: any): boolean {

    if (deck.cards.length !== 99) {
      return false;
    }
  
    const uniqueColors = new Set(deck.colors);
    if (uniqueColors.size < 1 || uniqueColors.size > 5) {
      return false;
    }
  
    if (!deck.commanderName) {
      return false;
    }
  
    return true;
  }