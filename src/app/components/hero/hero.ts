import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollToContact(): void {
  document.getElementById('contact')?.scrollIntoView({
    behavior: 'smooth'
  });
}
}
