import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1 {
      margin-top: 20px;
      font-size: 30px;
      // color: #bcbcbc
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AuthorComponent {

}
