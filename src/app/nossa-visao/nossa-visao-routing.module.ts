import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NossaVisaoComponent} from './nossa-visao.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'nossa-visao', component: NossaVisaoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NossaVisaoRoutingModule { }
