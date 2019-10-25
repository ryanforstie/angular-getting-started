import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// @ indicates the following is a component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // Create property named product, @Input() decorator indicates propery value passes in from component's parent
  @Input() product;
  @Output() notify = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

}