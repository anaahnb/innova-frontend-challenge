import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
 selector: 'btn-scroll-top',
 standalone: true,
 imports: [
  CommonModule
 ],
 templateUrl: './scroll-top.component.html',
 styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

 windowScrolled: boolean;

 constructor(@Inject(DOCUMENT) private document: Document) {
    this.windowScrolled = false;
 }

 @HostListener("window:scroll", [])
 onWindowScroll() {
    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10)) {
      this.windowScrolled = false;
    }
 }

 scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
 }

 ngOnInit() {
 }
}
