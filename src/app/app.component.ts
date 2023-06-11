import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isFavorite = false;
  imageUrl = 'https://i.imgur.com/C99E0zT.png';

  constructor(private renderer: Renderer2) { }

  couseGoals = [
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Understand Angular Animations', isActiveGoal: false },
    { title: 'Master Angular Animations', isActiveGoal: false }
  ]

  onShowBoring(element: HTMLElement) {
    this.renderer.setStyle(element, 'display', 'block');
  }
}
