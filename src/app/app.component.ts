import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isFavorite = false;
  showBoring = false;
  imageUrl = 'https://i.imgur.com/C99E0zT.png';

  couseGoals = [
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Understand Angular Animations', isActiveGoal: false },
    { title: 'Master Angular Animations', isActiveGoal: false }
  ]
}
