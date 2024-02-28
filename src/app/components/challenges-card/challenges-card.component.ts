import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import json from '../../data/challenge.json';

@Component({
  selector: 'app-challenges-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './challenges-card.component.html',
  styleUrl: './challenges-card.component.scss'
})
export class ChallengesCardComponent {
  cards: any[] = json.cards;
}
