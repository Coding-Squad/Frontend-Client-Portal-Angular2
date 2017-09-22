import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { Rating } from '../../models/rating';
import { DishService } from '../../services/dish.service';
import { Http } from '@angular/http';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private rating: Rating = new Rating();

  constructor(private dishService: DishService) { }

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
  }

}
