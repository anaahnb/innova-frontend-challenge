import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApplicationComponent } from '../application/application.component';
import { ChallengeCardComponent } from '../challenge-card/challenge-card.component';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';
import { ButtonComponent } from '../button/button.component';
import { AwardsCardComponent } from '../awards-card/awards-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    ChallengeCardComponent,
    ScheduleCardComponent,
    AwardsCardComponent,
    ApplicationComponent,
    ButtonComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  button_primary = {
    styles: { backgroundColor: '#003262', color: '#FFFFFF', padding: '1.25rem 3rem', fontSize: '1.5rem' }
  };
}
