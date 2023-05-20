import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})
export class RatingCardComponent {
  ratings: number[] = [1, 2, 3, 4, 5];
  @Input() selectedRating: number | null;
  @Output() ratingSelected: EventEmitter<number> = new EventEmitter<number>();

  selectRating(rating: number) {
    this.selectedRating = rating;
  }

  submitRating() {
    if (this.selectedRating !== null) {
      this.ratingSelected.emit(this.selectedRating);
    }
  }
}
