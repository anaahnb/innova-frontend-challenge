import { Component } from '@angular/core';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    ScheduleCardComponent,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
