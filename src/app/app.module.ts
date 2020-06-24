import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-module/user-dashboard/user-dashboard.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterationModule } from './registration-module/registeration.module'; //Being lazily loaded so removed from imports array
import { UserModule } from './user-module/user.module';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserSignInComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
