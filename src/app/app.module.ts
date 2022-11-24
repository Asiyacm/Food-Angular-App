import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { JuiceComponent } from './juice/juice.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { SaladsComponent } from './salads/salads.component';
import { StarterComponent } from './starter/starter.component';
import { RouterModule, Routes } from '@angular/router';


const myRoute: Routes=[
  {
    path: "",
    component:UserLoginComponent
  },
  {
    path: "signup",
    component:UserSignupComponent
  },
  {
    path: "juice",
    component:JuiceComponent
  },
  {
    path: "main",
    component:MainCourseComponent
  },
  {
    path: "salads",
    component:SaladsComponent
  },
  {
    path: "starter",
    component:StarterComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    JuiceComponent,
    MainCourseComponent,
    SaladsComponent,
    StarterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
