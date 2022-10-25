import { OrderItemComponent } from './MyComponents/order-item/order-item.component';
import { OrdersComponent } from './MyComponents/orders/orders.component';
import { AddOrderItemComponent } from './MyComponents/add-order-item/add-order-item.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderItemComponent,
    OrdersComponent,
    OrderItemComponent
  ],
  imports: [BrowserModule,FormsModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
