import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing/app-routing.module';

// custom Component
import { UserTodoListComponent } from './user-todo-list/user-todo-list.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTodoListComponent,
    UserSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
