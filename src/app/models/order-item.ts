import { Dish } from './dish';
import { OrderList } from './order-list';

export class OrderItem {

    public id: number;
    public qty: number;
    public orderList: OrderList;
    public dish: Dish;
    public subtotal:number;

}
