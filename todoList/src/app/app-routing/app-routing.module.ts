import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// New component added
import { UserTodoListComponent } from '../user-todo-list/user-todo-list.component';
import { UserSigninComponent } from '../user-signin/user-signin.component';

const routes: Routes = [
  {
    path: 'UserTodoList',
    component: UserTodoListComponent,
  },
  {
    path: 'UserSignin',
    component: UserSigninComponent,
  },
  { path: '', redirectTo: '/UserSignin', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
