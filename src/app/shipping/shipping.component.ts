import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    // Inject cart service into ShippingComponent
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Set shippingCosts
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}