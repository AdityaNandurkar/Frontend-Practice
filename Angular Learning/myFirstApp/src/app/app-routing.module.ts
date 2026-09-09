import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCComponent } from './demo-c/demo-c.component';

const routes: Routes = [
  { path: 'demo', component: DemoCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
