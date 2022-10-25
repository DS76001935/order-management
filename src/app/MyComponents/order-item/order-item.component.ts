import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/Order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;
  @Input() i!: number;
  @Output() orderDelete: EventEmitter<Order> = new EventEmitter();
  @Output() orderCheck: EventEmitter<Order> = new EventEmitter();
  @Output() orderReassigned: EventEmitter<Order> = new EventEmitter();

  lineThrough!: string;
  checkStr: boolean = false;
  status = {
    prop1: 'accepted',
    prop2: 'prepared',
    prop3: 'delivered',
  };

  constructor() {}

  ngOnInit(): void {
  }

  Delete(order: Order) {
    this.orderDelete.emit(order);
    console.log('delete button clicked!');
  }
  Reassign(order: Order) {
    this.orderReassigned.emit(order);
    console.log('Order has been reassigned!');
  }

  changeOrderStatus(str: any, order: Order) {
    if (str === this.status.prop1) {
      order.accepted = true;
      order.created = false;
      order.prepared = false;
      order.delivered = false;
      order.color = '#ABD7EB';
      order.lineThrough = '';
    }
    if (str == this.status.prop2) {
      order.prepared = true;
      order.created = false;
      order.accepted = false;
      order.delivered = false;
      order.color = '#90EE90';
      order.lineThrough = '';
    }
    if (str == this.status.prop3) {
      order.delivered = true;
      order.created = false;
      order.prepared = false;
      order.accepted = false;
      order.color = '#FF7F7F';
      order.lineThrough = 'line-through';
    }
    this.orderCheck.emit(order);
  }
}
