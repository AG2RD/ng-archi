import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FrodonService } from './frodon.service';
import { LazyOneRoutingModule } from './routing/lazy-one-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ],
  providers: [
    FrodonService
  ]
})
export class LazyOneModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: LazyOneRoutingModule,
          providers: [
            FrodonService
          ]
        };
      }
}
