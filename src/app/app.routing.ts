import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RatingComponent } from './components/rating/rating.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dishList',
        component: DishListComponent
    },
    {
        path: 'viewDish/:id',
        component: DishDetailComponent
    },
    {
        path: 'orderList',
        component: OrderListComponent
    },
    {
        path: 'orderSummary',
        component: OrderSummaryComponent
    },
    {
        path: 'rating',
        component: RatingComponent
    }
    
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);