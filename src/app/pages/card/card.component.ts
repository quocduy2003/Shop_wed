import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailspDialogComponent } from 'src/app/components/detailsp-dialog/detailsp-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @ViewChild('myModal', { static: false }) item_detail_dialog: ElementRef | undefined;


  constructor(private renderer: Renderer2,public cart:ShoppingcartService,public dialog:MatDialog) {
    console.log(this.item_detail_dialog)
  }

  ngAfterViewInit(): void {
    if (this.item_detail_dialog != undefined) {
      console.log(this.item_detail_dialog.nativeElement);
    }
  }

  openDialog() {

    if (this.item_detail_dialog != undefined) {
      console.log(this.item_detail_dialog.nativeElement.style);
      this.item_detail_dialog.nativeElement.style.display = "block";
    }

  }

  closeDialog() {
    if (this.item_detail_dialog != undefined) {
    
      this.item_detail_dialog.nativeElement.style.display = "none";

    }
  }

  public opendetaildialog(){
    this.dialog.open(DetailspDialogComponent, {panelClass:'DetailspDialogComponent'})
  }
}
