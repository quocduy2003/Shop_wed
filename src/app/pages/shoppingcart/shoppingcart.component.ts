import { Component, Input } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent {

  constructor(public shoppingcart:ShoppingcartService){

  }
  public payment=0;
  
  public ThanhTien(){
    this.payment = this.shoppingcart.amount();
    // alert(this.payment)
  }

  public total = 0;
  public increase(){
    this.shoppingcart.cart.quantity++;
    this.total = this.shoppingcart.cart.quantity * this.shoppingcart.cart.price;
    console.log(this.total)
  }
  public decrease(){
    this.shoppingcart.cart.quantity--;
    this.total = this.shoppingcart.cart.quantity * this.shoppingcart.cart.price;
  }
}
