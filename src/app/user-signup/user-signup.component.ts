import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {


  name=""
  adress=""
  pincode=""
  phoneno=""
  emailid=""
  username=""
  password=""
  confirmpassword=""


  userSignup=()=>
  {
    let signup:any=
    {"name":this.name,"adress":this.adress,"pincode":this.pincode,"phoneno":this.phoneno,
    "emailid":this.emailid,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(signup)
  }



  

}
