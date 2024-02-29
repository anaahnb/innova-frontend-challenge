import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChallengesComponent } from '../challenges/challenges.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AwardsComponent } from '../awards/awards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    ChallengesComponent,
    ScheduleComponent,
    AwardsComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
