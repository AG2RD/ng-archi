import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../core/models/hero';
import { HeroSandbox } from '../hero.sandbox';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private sandbox: HeroSandbox) { }

  ngOnInit() {
    this.getHeroes();
    this.sandbox.logMessage(`I turned myself into a pickle. I'm Pickle Riiiiick.`)
  }

  getHeroes(): void {
    this.sandbox.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sandbox.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.sandbox.deleteHero(hero).subscribe();
  }

}
