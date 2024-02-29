import { Component } from '@angular/core';
import { AwardsCardComponent } from '../awards-card/awards-card.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    AwardsCardComponent
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {

}
