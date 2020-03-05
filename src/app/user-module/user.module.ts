import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { TestComponent } from './test/test.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [ChatComponent, TestComponent, CompanyDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
