import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroService } from './services/hero.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessageService } from './services/message.service';
import { MyLovelyService } from './services/my-service.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  exports: [
    BrowserModule
  ],
  providers:[HeroService, MyLovelyService, MessageService,InMemoryDataService ]
})
export class CoreModule { }
