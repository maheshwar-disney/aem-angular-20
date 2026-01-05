import { Component, Input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disney-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disney-cards.html',
  styleUrls: ['./disney-cards.scss'],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class DisneyCardsComponent {
  @Input() heading: string = '';
  @Input() description: string = '';

  // Internal array to hold parsed cards
  public cards: any[] = [];

  // Setter to handle the JSON string coming from AEM HTL
  @Input('cards-data')
  set cardsData(value: string) {
    if (value) {
      try {
        this.cards = JSON.parse(value);
      } catch (e) {
        console.error("Failed to parse cards data", e);
        this.cards = [];
      }
    }
  }

  // Handler for wdpr favorites toggle events
  wdprFavoritesToggle(event: any, card: any): void {
    console.log('Favorites toggled for card', card, event);
    // Update the card state so UI stays in sync
    if (card) {
      card.favorite = event?.selected ?? !card.favorite;
    }
  }
}