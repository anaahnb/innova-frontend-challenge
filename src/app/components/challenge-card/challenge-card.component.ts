import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import json from '../../../assets/data/challenge.json';

@Component({
  selector: 'challenge-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './challenge-card.component.html',
  styleUrl: './challenge-card.component.scss'
})

export class ChallengeCardComponent {
  cards: any[] = json.cards;

}
