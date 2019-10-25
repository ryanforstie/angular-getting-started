import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    // Inject CartService to manage cart info
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Set items
    this.items = this.cartService.getItems();
  }

}