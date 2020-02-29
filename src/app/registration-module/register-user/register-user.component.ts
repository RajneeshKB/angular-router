import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userName;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.userName = this.route.snapshot.paramMap.get('name');  //this will not refresh view if name get changed from same path
    // Observable version (use async pipe)  // this will update and refresh view if name get changed from same path also
    this.userName = this.route.paramMap.pipe(
      map((params:ParamMap)=>{
        return params.get('name');
      })
    );
  }

  registerRajneesh(){
    this.router.navigate(['../','Rajneesh'],{relativeTo:this.route});
    // this.router.navigate(['../Rajneesh',{company: 'ttn'}],{relativeTo:this.route});
    // this.router.navigateByUrl('register/register-user/Rajneesh');
  }

}
