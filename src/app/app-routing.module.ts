import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./MyComponents/orders/orders.component").then(res => res.OrdersComponent)
  },
  {
    path:"addItem",
    loadChildren: () => import("./MyComponents/add-order-item/add-order-item.component").then(res => res.AddOrderItemComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
