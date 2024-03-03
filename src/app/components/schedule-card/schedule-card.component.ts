import { Component } from '@angular/core';
import json from '../../../assets/data/schedule.json';

@Component({
  selector: 'schedule-card',
  standalone: true,
  imports: [],
  templateUrl: './schedule-card.component.html',
  styleUrl: './schedule-card.component.scss'
})
export class ScheduleCardComponent {
  schedules: any[] = json.schedules;
}
