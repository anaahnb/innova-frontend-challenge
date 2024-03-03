import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
