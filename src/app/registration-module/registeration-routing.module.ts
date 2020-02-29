import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterDashboardComponent } from './register-dashboard/register-dashboard.component';

const routes: Routes = [
  { 
    path: 'register', 
    component: RegisterDashboardComponent,
    children: [
      { path: 'register-user/:name', component: RegisterUserComponent },
      { path: 'register-company/:name', component: RegisterCompanyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
