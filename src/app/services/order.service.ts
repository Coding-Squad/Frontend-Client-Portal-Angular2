import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

  constructor(private http:Http) { }

  addItem(id:number, qty: number){
    let url= AppConst.serverPath+"/order/add";
    let orderItemInfo = {
      "dishId" : id,
      "qty" : qty
    }
    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, orderItemInfo, {headers: tokenHeader});
  }

  getOrderItemList(){
    let url=AppConst.serverPath+"/order/getOrderItemList";
    let tokenHeader= new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  getOrderList(){
    let url=AppConst.serverPath+"/order/getOrderList";
    let tokenHeader= new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  getOrderListSummary(){
    let url=AppConst.serverPath+"/order/getOrderListSummary";
    let tokenHeader= new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  updateOrderItem(orderItemId:number, qty: number){
    let url= AppConst.serverPath+"/order/updateOrderItem";
    let orderItemInfo = {
      "orderItemId" : orderItemId,
      "qty" : qty
    }
    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, orderItemInfo, {headers: tokenHeader});
  }

  removeItem(id:number){
    let url=AppConst.serverPath+"/order/removeItem";
    let tokenHeader= new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id, {headers: tokenHeader});
  }

  confirm(){
    let url=AppConst.serverPath+"/order/confirm";
    let tokenHeader= new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, '', {headers: tokenHeader}); 
  }

  rateOrder(orderId:number, rating: number){
    let url = AppConst.serverPath+"/order/rate";
      let orderRatingInfo = {
      "orderId" : orderId,
      "rating" : rating
    }
      let headers = new Headers ({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, orderRatingInfo, {headers: headers});
  }
}
