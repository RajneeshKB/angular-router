import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth/auth.guard';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyDetailsResolverService } from './company-details/company-details-resolver.service';

const routes: Routes = [{
  path: 'user-dashboard',
  component: UserDashboardComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'chat', component: ChatComponent, outlet: 'popup'},
    {path: 'company-details/:compId', component: CompanyDetailsComponent, resolve: { compDetail: CompanyDetailsResolverService}},
    {path: 'test', component: TestComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
