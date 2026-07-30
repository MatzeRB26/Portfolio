import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/projects/portfolio';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}