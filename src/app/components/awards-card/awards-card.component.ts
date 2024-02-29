import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import json from '../../data/awards.json';

@Component({
  selector: 'app-awards-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './awards-card.component.html',
  styleUrl: './awards-card.component.scss'
})
export class AwardsCardComponent {
  awards: any[] = json.awards;
}
