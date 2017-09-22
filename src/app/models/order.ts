import {OrderItem} from './order-item';

export class Order {

    public id: number;
    public orderDate: string;
    public orderTotal : number;
    public rating : number;
    public orderItemList: OrderItem[];
}
