import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Dish } from '../../models/dish';
import { Order } from '../../models/order';
import { OrderList } from '../../models/order-list';
import { OrderItem } from '../../models/order-item';
import { OrderService } from '../../services/order.service';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

private serverPath = AppConst.serverPath;
private selectedDish : Dish;
private orderItemList: OrderItem[] = [];
private orderItemNumber: number;
private orderList: OrderList = new OrderList();
private orderItemUpdated: boolean;
private emptyOrder: boolean=false;
private order:Order = new Order();
private displayOrderDetail:boolean;
private orderConfirmed: boolean=false;
private orderPlaced: boolean=false;

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  onSelect(dish:Dish){
    this.selectedDish = dish;
    this.router.navigate(['/viewDish', this.selectedDish.id]);
  }

  onRemoveOrderItem(orderItem: OrderItem){
    this.orderService.removeItem(orderItem.id).subscribe(
      res => {
        console.log(res.text());
       this.getOrderList();
       this.getOrderItemList();
        

      },
      error => {
        console.log(error.text());
      });
  }

  onUpdateOrdertItem(orderItem: OrderItem) {
  	this.orderService.updateOrderItem(orderItem.id, orderItem.qty).subscribe(
  		res => {
  			console.log(res.text());
  			this.orderItemUpdated=true;
  			this.getOrderList();
  		},
  		error => {
  			console.log(error.text());
  		}
  	)
  }

  getOrderItemList()  {
  	this.orderService.getOrderItemList().subscribe(
  		res => {
  			this.orderItemList=res.json();
  			this.orderItemNumber = this.orderItemList.length;
        if(this.orderItemNumber==0){
          this.emptyOrder=true;
          console.log("Empty YES");
        }else{
          console.log("Not Empty");
        }
  		},
  		error => {
  			console.log(error.text());
  		}
  	)
  }

  getOrderList() {
  	this.orderService.getOrderList().subscribe(
  		res => {
  			console.log(res.json());
  			this.orderList=res.json();
  		},
  		error => {
  			console.log(error.text());
  		}
  	)
  }

  goToOrderSummary(){
    this.orderConfirmed=true;
  }

onSubmit(){
  this.orderService.confirm().subscribe(
    res =>{
      this.order=res.json();
      console.log(this.order);
      this.orderPlaced=true;
    },
    error =>{
      console.log(error.text());
    }
  );
}

  ngOnInit() {
    this.getOrderList();
    this.getOrderItemList();  
  }

}
