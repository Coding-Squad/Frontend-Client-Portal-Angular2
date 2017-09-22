import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Dish } from '../../models/dish';
import { Order } from '../../models/order';
import { OrderList } from '../../models/order-list';
import { OrderItem } from '../../models/order-item';
import { OrderService } from '../../services/order.service';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private order:Order = new Order();
  private orderListSummary: Order[] = [];

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  onRateOrder(order: Order){
    this.orderService.rateOrder(order.id, order.rating).subscribe(
      res => {
        console.log(res.text());
      },
      error => {
        console.log(error.text());
      }
    )
  }

  ngOnInit() {
    this.orderService.getOrderListSummary().subscribe(
      res => {
        this.orderListSummary = res.json();
      },
      error =>{
        console.log(error.text());
      }
    );
  }

}
