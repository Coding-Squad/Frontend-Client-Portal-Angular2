import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;

  constructor(private loginService:LoginService, private router:Router) { }

  logout(){
    this.loginService.logout().subscribe(
      res => {
        location.reload();
        console.log("logout successfully done !");
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);
  }

  ngOnInit() {
    	this.loginService.checkSession().subscribe(
			res => {
				this.loggedIn=true;
			},
			error => {
				this.loggedIn=false;
			}
		);
  }

}
