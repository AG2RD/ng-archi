import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from '../test/test.component';
import { GandalfGuard } from './gandalf.guard';

const routes: Routes = [{
    path: '',
    canActivate: [GandalfGuard],
    component: TestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GandalfGuard]
})
export class LazyOneRoutingModule { }
