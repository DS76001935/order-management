import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/Order';

@Component({
  selector: 'app-add-order-item',
  templateUrl: './add-order-item.component.html',
  styleUrls: ['./add-order-item.component.css'],
})
export class AddOrderItemComponent implements OnInit {
  orderName!: string;
  desc!: string;
  qty!: number;
  created:boolean = true;
  accepted: boolean = false;
  prepared: boolean = false;
  delivered: boolean = false;
  color: string = "#D3D3D3";
  lineThrough: string = "";

  @Output() orderAdd: EventEmitter<Order> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Order Form Submitted!');
    const myOrder: Order = {
      orderid: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      title: this.orderName,
      desc: this.desc,
      quantity: this.qty,
      created: this.created,
      accepted: this.accepted,
      prepared: this.prepared,
      delivered: this.delivered,
      color: this.color,
      lineThrough: this.lineThrough
    };
    this.orderAdd.emit(myOrder);
  }
}
