import { Component } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-detailsp-dialog',
  templateUrl: './detailsp-dialog.component.html',
  styleUrls: ['./detailsp-dialog.component.scss']
})
export class DetailspDialogComponent {
  constructor(public cart:ShoppingcartService) {
  }
}
