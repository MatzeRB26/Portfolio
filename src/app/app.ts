import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/projects/portfolio';
import { ReferencesComponent } from './components/references/references';
import { Contact } from './components/contact/contact';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Portfolio, ReferencesComponent, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}