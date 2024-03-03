import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule
  ],
  providers: [ Meta ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Innova';

  constructor(private metaService:Meta) { }

  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"Landing page desenvolvida com Angular 17 e Sass para o teste técnico de front-end da Innova - All the brand"});
  }
}
