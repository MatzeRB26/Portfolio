import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}