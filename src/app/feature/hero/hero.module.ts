import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LazyOneModule } from '../lazy-one/lazy-one.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSandbox } from './hero.sandbox';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroRoutingModule } from './routing/hero-routing.module';


@NgModule({
  declarations: [
      HeroDetailComponent,
      HeroSearchComponent,
      HeroesComponent,
      DashboardComponent,
  ],
  imports: [
    SharedModule,
    HeroRoutingModule,
    LazyOneModule
  ],
  providers: [
    HeroSandbox
  ]
})
export class HeroModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: HeroModule,
          providers: [
           HeroSandbox
          ]
        };
      }
}
