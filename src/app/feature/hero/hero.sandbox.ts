import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../../core/models/hero';
import { HeroService } from '../../core/services/hero.service';
import { MyLovelyService } from '../../core/services/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroSandbox {

  constructor(private heroService: HeroService, private myService: MyLovelyService) { }

  logMessage(message:string): void {
    this.myService.logMessage(message);
  }

  getHeroes (): Observable<Hero[]> {
    return this.heroService.getHeroes();
  }
  
  searchHeroes(term: string): Observable<Hero[]> {
    return this.heroService.searchHeroes(term);
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.heroService.addHero(hero);
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    return this.heroService.deleteHero(hero);
  }
}
