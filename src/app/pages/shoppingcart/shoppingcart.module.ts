import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingcartComponent } from './shoppingcart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {ShoppingcartService} from 'src/app/services/shoppingcart.service';

@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,
    ShoppingcartRoutingModule,
    SharedModule
  ]
})
export class ShoppingcartModule { 
  constructor(public ShoppingcartService:ShoppingcartService){

  }
}
