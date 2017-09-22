import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AppConst } from '../../constants/app-const';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private credential = {'username':'', 'password' : ''};
  private loggedIn = false;
  private loginError: boolean = false;
	private serverPath = AppConst.serverPath;

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin() {
  	this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
  		res => {
  			console.log(res);
  			localStorage.setItem("xAuthToken", res.json().token);
  			this.loggedIn = true;
				console.log("connexion succeed");
				location.reload();
				setTimeout(() => this.router.navigate(['/dishList']), 1000)
				
  		},
  		error => {
  			console.log("connexoion failed");
        this.loginError= true;
  		}
  	);
  }

  ngOnInit() {
		this.loginService.checkSession().subscribe(
			res => {
				this.loggedIn=true;
				console.log("session ok");
			},
			error => {
				this.loggedIn=false;
				console.log("session error");
			}
		);
  }

}
