import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './users/user-data/user-data.component';

export const routes: Routes = [
    {
        path: 'users',
        pathMatch: 'full',
        component: UsersComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'users/new',
        pathMatch: 'full',
        component: UserDetailsComponent
    },
    {
        path: 'users/users/new',
        pathMatch: 'full',
        redirectTo: 'users/new'
    },
    {
        path: 'users/:id/edit',
        pathMatch: 'full',
        component: UserDetailsComponent
    },
    {
        path: 'users/:id',
        pathMatch: 'full',
        component: UserDataComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UserDetailsComponent,
        UserDataComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        FontAwesomeModule,
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}
