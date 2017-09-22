import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'angular2-datatable';
import { RatingModule } from "ngx-rating";
import 'hammerjs';

import { LoginService } from './services/login.service';
import { DishService } from './services/dish.service';
import { OrderService } from './services/order.service';

import { DataFilterPipe } from './components/dish-list/data-filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DishListComponent,
    DataFilterPipe,
    DishDetailComponent,
    OrderListComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule,
    DataTableModule,
    RatingModule
  ],
  providers: [
    LoginService,
    DishService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
