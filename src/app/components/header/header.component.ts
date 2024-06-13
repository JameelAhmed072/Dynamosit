import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType: string = '';
  sellerName: string = '';
  userName: string = '';
  cartItems = 0;
  isMenuOpen: boolean = false;
  constructor(){}

  ngOnInit(): void {

  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
