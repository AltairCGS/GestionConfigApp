import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { InputComponent } from './todo-home/input/input.component';
import { TaskComponent } from './todo-home/task/task.component';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TodoHomeComponent,
    InputComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-01zd21ssgzmznj46.us.auth0.com',
      clientId: 'Mp17Q0T5LtePQwL3yo2HiUd5vTYOHQhz',
      authorizationParams: {
        redirect_uri: 'https://altaircgs.github.io/GestionConfigApp/'
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
