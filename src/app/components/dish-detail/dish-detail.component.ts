import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AppConst } from '../../constants/app-const';
import { Dish } from '../../models/dish';
import { Http } from '@angular/http';
import { DishService } from '../../services/dish.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  private dishId: number;
	private dish: Dish = new Dish();
	private serverPath = AppConst.serverPath;
	private numberList: number[] = [1,2,3,4,5,6,7,8,9];
	private qty: number;

	private addDishSuccess: boolean = false;
	

  constructor(
    private dishService:DishService,
		private orderservice:OrderService,
    private router:Router,
		private http:Http,
		private route:ActivatedRoute
  ) { }

	onAddToCart(){
		this.orderservice.addItem(this.dishId, this.qty).subscribe(
			res => {
				console.log(res.text());
				this.addDishSuccess=true;
				setTimeout(() => this.router.navigate(['/orderList']), 1000);
			},
			err => {
				console.log(err.text());
			}
		)
		
	}

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.dishId = Number.parseInt(params['id']);
  	});

  	this.dishService.getDish(this.dishId).subscribe(
  		res => {
  			this.dish=res.json();
  		},
  		error => {
  			console.log(error);
  		}
  	);

  	this.qty = 1;
  }

}
