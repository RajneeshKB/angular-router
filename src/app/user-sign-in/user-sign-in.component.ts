import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  constructor(private router: Router, private commonService:CommonServiceService) { }

  ngOnInit() {
  }

  userName = "";
  password = "";
  loginError = false;

  onSubmit(){
    if(this.userName === 'admin' && this.password == 'admin'){
      console.log('logging in');
      this.commonService.updateLoginStatus = true;
      this.commonService.updateLoggedInUserName = this.userName;
      // this.router.navigate(['register-user' + '/test']);
      // navigate will navgate as relative path (default)
      //navigateByUrl will navigate as absolute path (default)
      // this.router.navigate(['user-dashboard', {user: this.userName, optional: 'test'}]);
      this.router.navigateByUrl('user-dashboard');
    }else{
      this.loginError = true;
    }
  }

}
