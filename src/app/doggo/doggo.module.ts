import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoggoComponent } from './doggo.component';
import { DoggoRoutingModule } from './doggo-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DoggoComponent],
  imports: [
    CommonModule,
    DoggoRoutingModule,
    SharedModule
  ]
})
export class DoggoModule { }
