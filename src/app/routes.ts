import { Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * Lazy loading of registration module here, so loadChildren is used
 */
export const routeConfig: Routes = [
    { path: 'sign-in', component: UserSignInComponent },
    {
        path: 'register',
        loadChildren: './registration-module/registeration.module#RegisterationModule'
    },
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
