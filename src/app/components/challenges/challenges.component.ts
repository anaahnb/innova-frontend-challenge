import { Component } from '@angular/core';
import { ChallengesCardComponent } from '../challenges-card/challenges-card.component';

@Component({
 selector: 'app-challenges',
 standalone: true,
 imports: [
  ChallengesCardComponent
],

 templateUrl: './challenges.component.html',
 styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent {

}
