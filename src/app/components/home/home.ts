import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Portfolio } from '../projects/portfolio';
import { ReferencesComponent } from '../references/references';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Portfolio, ReferencesComponent, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
