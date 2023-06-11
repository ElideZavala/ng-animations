import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`

    .conectado {
      background-color: yellow;
    }

    .libre {
      border: 2px solid orange;
    }

  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AuthorComponent {
  conteccion: boolean = true;


}
