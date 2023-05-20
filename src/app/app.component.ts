import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Frontend Mentor | Interactive rating component';
  selectedRating: number | null = null;

  handleSelectedRating(rating: number) {
    this.selectedRating = rating;
  }
}
