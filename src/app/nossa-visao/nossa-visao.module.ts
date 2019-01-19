import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NossaVisaoComponent} from './nossa-visao.component';
import {NossaVisaoRoutingModule} from './nossa-visao-routing.module';

@NgModule({
  declarations: [
    NossaVisaoComponent
  ],
  imports: [
    CommonModule,
    NossaVisaoRoutingModule
  ]
})
export class NossaVisaoModule { }
