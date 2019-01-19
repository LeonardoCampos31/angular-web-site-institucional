import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NossaVisaoModule} from './nossa-visao/nossa-visao.module';
import {ContatoModule} from './contato/contato.module';
import {QuemSomosModule} from './quem-somos/quem-somos.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NossaVisaoModule,
    ContatoModule,
    QuemSomosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
