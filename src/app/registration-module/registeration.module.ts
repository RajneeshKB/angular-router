import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterDashboardComponent } from './register-dashboard/register-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterUserComponent, RegisterCompanyComponent, RegisterDashboardComponent],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterationModule { }
