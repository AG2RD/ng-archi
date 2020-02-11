import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { HeroModule } from './feature/hero/hero.module';

@NgModule({
  imports: [
    CoreModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    HeroModule,
  ],
  declarations: [
    AppComponent,
  
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
