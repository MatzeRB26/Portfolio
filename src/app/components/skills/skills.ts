import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  translate = inject(TranslateService);

  skillIcons = [
    { name: 'HTML', image: 'assets/icons/html.svg' },
    { name: 'CSS', image: 'assets/icons/css.svg' },
    { name: 'JavaScript', image: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', image: 'assets/icons/typescript.svg' },
    { name: 'Angular', image: 'assets/icons/angular.svg' },
    { name: 'Git', image: 'assets/icons/git.svg' },
    { name: 'Rest-Api', image: 'assets/icons/api.svg' },
    { name: 'Scrum', image: 'assets/icons/scrum.svg' },
    { name: 'Supabase', image: 'assets/icons/supabase.svg' }
  ];

  get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}