import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCartDropdownVisible = false;

  toggleCartDropdown() {
    console.log("in cart");
    this.isCartDropdownVisible = !this.isCartDropdownVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
