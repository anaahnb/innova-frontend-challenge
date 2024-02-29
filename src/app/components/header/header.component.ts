import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  button_tertiary = {
    styles: { backgroundColor: '#FFFF', color: '#003262', padding: '1rem 2rem', fontSize: '1.25rem' }
  };
}
