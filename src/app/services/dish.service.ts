import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dish } from '../models/dish';
import { AppConst } from '../constants/app-const';
import { Rating } from '../models/rating';

@Injectable()
export class DishService {

  private serverPath = AppConst.serverPath;

  constructor(private http:Http) { }

  getDishList(){
    let url = this.serverPath+"/dish/dishList";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  getCustomList(){
    let url = this.serverPath+"/dish/customList";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  getDish(id:Number){
    let url = this.serverPath+"/dish/"+id;

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.get(url, {headers: headers});

  }

  searchDish(keyword:string){
    let url = this.serverPath+"/dish/searchDish";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, keyword, {headers: headers});

  }

  rateUser(rating:Rating){
    let url = this.serverPath+"/user/rate";

      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, JSON.stringify(rating), {headers: headers});

  }

}
