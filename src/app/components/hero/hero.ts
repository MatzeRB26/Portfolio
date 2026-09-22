import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe], 
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  translate = inject(TranslateService);

  get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}