import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { Rating } from '../../models/rating';
import { DishService } from '../../services/dish.service';
import { Http } from '@angular/http';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

private serverPath = AppConst.serverPath;
public filterQuery = "";
public rowsOnPage = 5;

private selectedDish: Dish;
private dishList: Dish[];
private customList: Dish[];
private showList: Dish[];
private rating: Rating = new Rating();

  constructor(
    private dishService: DishService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

 onSelect(dish:Dish){
    this.selectedDish=dish;
    this.router.navigate(['/viewDish', this.selectedDish.id]);
  }

	onListStandard(){
		
		this.showList= this.dishList;
	}

	onListCustom(){
		
		this.showList = this.customList;
	}

	 onRateUser(rating: Rating){
    this.dishService.rateUser(this.rating).subscribe(
      res => {
        console.log(res.text());
      },
      error => {
        console.log(error.text());
      }
    )
  }
	

  ngOnInit() { 

		this.route.queryParams.subscribe(params => {
			if(params['dishList']) {
				console.log("filtered dish list");
				this.dishList = JSON.parse(params['dishList']);
			} else {
				this.dishService.getDishList().subscribe(
					res => {
						console.log(res.json());
						this.dishList = res.json();
						this.showList=this.dishList;
					},
					err => {
						console.log(err);
					}
					);
			}
		});

		this.dishService.getCustomList().subscribe(
			res => {
				console.log(res.json());
				this.customList = res.json();
			},
			err => {
				console.log(err);
			}
		);


	}

}
