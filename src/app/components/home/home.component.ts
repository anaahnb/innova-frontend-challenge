import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChallengeCardComponent } from '../challenge-card/challenge-card.component';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';
import { ButtonComponent } from '../button/button.component';
import { AwardsCardComponent } from '../awards-card/awards-card.component';
import { ApplicationFormComponent } from '../application-form/application-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    ChallengeCardComponent,
    ScheduleCardComponent,
    AwardsCardComponent,
    ApplicationFormComponent,
    ButtonComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
