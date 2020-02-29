import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'user-dashboard', component: UserDashboardComponent, 
  children: [
    {path: 'chat', component: ChatComponent, outlet: 'popup'},
    {path: 'test', component: TestComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
