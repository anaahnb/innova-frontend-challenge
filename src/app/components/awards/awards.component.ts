import { Component } from '@angular/core';
import { AwardsCardComponent } from '../awards-card/awards-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    AwardsCardComponent,
    ButtonComponent
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  button_primary = {
      styles: { backgroundColor: '#003262', color: '#FFFFFF', padding: '1.25rem 3rem', fontSize: '1.5rem' }
  };
}
