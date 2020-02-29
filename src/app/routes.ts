import { Routes } from "@angular/router";
import { UserSignInComponent } from "./user-sign-in/user-sign-in.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routeConfig:Routes = [
    { path: 'sign-in', component: UserSignInComponent },
    { path: '', redirectTo:'/sign-in', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];