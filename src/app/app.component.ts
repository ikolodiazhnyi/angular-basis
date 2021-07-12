import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardComponent],
})
export class AppComponent {
  title = '℗ AWGE/Interscope records';
  showContent = true;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
