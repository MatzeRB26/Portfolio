import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillIcons = [
  {
    name: 'HTML',
    image:'assets/icons/html.svg'
  },
  {
    name: 'CSS',
    image:'assets/icons/css.svg'
  },
  {
    name: 'JavaScript',
    image:'assets/icons/javascript.svg'
  },
  {
    name: 'TypeScript',
    image:'assets/icons/typescript.svg'
  },
  {
    name: 'Angular',
    image:'assets/icons/angular.svg'
  },
  {
    name: 'Git',
    image:'assets/icons/git.svg'
  },
  {
    name: 'Rest-Api',
    image:'assets/icons/api.svg'
  }
];

scrollToContact(): void {
  document.getElementById('contact')?.scrollIntoView({
    behavior: 'smooth'
  });
}
}
