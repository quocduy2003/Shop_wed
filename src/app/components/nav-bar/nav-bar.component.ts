import { Component,OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {  Router } from '@angular/router';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  constructor(public router:Router, public authService:AuthService,private auth:Auth){

  }
  navagiteToCart(){
    this.router.navigate([`/shoppingcart`]);
  }
  navagiteToHome(){
    this.router.navigate([`''`]);
  }
  ngOnInit(): void {
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.authService.currentUser = user;
      }
      else{
        this.authService.currentUser = null;
      }
    })
  }
}
