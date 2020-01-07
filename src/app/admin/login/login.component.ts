import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isemailNotvalid = false;
  register;
  isPasswordShort = false;
  isPasswordEmpty = false;
  checkEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
     }

  constructor(private router: Router) { }

  ngOnInit() {
    this.register = {
      email:'',
      password:''
    }
  }

  logAdmin(){
    
    console.log(this.isemailNotvalid)
    if (!this.checkEmailValid(this.register.email)) {
      this.isemailNotvalid = true;
      console.log(this.isemailNotvalid)
    
      // performLogin = false;
    }
    else if (!this.register.password ) {
      this.isPasswordEmpty = true;
      console.log(this.isPasswordEmpty);
  }
  else if ( this.register.password.length < 6) {
    this.isPasswordShort = true;
    console.log(this.isPasswordShort );
  
  }
  else{
    this.router.navigate(['categories']);

  }

}
}
