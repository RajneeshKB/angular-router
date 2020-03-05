import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userFormBuilder: FormBuilder
  ) { }

  get regFormControls() { return this.userRegistrationForm.controls; }

  userName;

  userRegistrationForm = this.userFormBuilder.group({
    firstName: [this.userName, Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
    // this.userName = this.route.snapshot.paramMap.get('name');  //this will not refresh view if name get changed from same path
    // Observable version (use async pipe)  // this will update and refresh view if name get changed from same path also
    this.userName = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return params.get('name');
      })
    );
  }

  registerRajneesh() {
    this.router.navigate(['../', 'Rajneesh'], {relativeTo: this.route});
    // this.router.navigate(['../Rajneesh',{company: 'ttn'}],{relativeTo:this.route});
    // this.router.navigateByUrl('register/register-user/Rajneesh');
  }

  registerUser(formValues) {
    console.log('formValues', formValues);
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if form is not filled
    if (!this.regFormControls.firstName.value || !this.regFormControls.email.value || !this.regFormControls.password.value) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    const result = window.confirm('Discard changes?');
    return of(result);
  }

}
