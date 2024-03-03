import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ChallengeCardComponent } from '../../components/challenge-card/challenge-card.component';
import { ScheduleCardComponent } from '../../components/schedule-card/schedule-card.component';
import { AwardsCardComponent } from '../../components/awards-card/awards-card.component';
import { ApplicationFormComponent } from '../../components/application-form/application-form.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';


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
    FooterComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
