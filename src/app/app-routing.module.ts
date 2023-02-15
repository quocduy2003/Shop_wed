import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/card/card.module').then(m => m.CardModule) },
  { path: 'shoppingcart', loadChildren: () => import('./pages/shoppingcart/shoppingcart.module').then(m => m.ShoppingcartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
