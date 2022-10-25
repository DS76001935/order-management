import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  localItem!: any;

  constructor() {
    this.localItem = localStorage.getItem("Orders");
    if(this.localItem === null){
      this.orders = [];
    }else{
      this.orders = JSON.parse(this.localItem);

    }

  }

  ngOnInit(): void {}

  deleteOrder(order: Order) {
    console.log(order);
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
    localStorage.setItem("Orders",JSON.stringify(this.orders));
  }

  addOrder(order: Order){
    console.log(order);
    this.orders.push(order);
    localStorage.setItem("Orders",JSON.stringify(this.orders));
  }

  checkOrder(order: Order) {
    console.log(order);
    localStorage.setItem("Orders",JSON.stringify(this.orders));
  }

  reassignedOrder(order: Order){
    order.orderid = Math.floor(Math.random() * (999999 - 100000)) + 100000,
    order.created= true;
    order.accepted= false;
    order.prepared= false;
    order.delivered= false;
    order.color= '#D3D3D3';
    order.lineThrough= '';
    localStorage.setItem("Orders",JSON.stringify(this.orders));
  }
}
