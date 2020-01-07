import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
//import * as bcrypt from 'bcrypt';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  isnameNotvalid;
  isprenomNotvalid;
  isnameShort;
  isemailNotvalid;
  IsPhoneWritten ;
  hide = true;
  islogin =false;
  register;

  constructor(private router:Router,private userservice:UserService, private snackBar: MatSnackBar) { }
 
  ngOnInit() {
    this.register = {
      nom:'',
     // username:'',
      username:'',
      email:'',
      password:'',
      repassword:'',
      telephone:'',
      adresse:''

    }
  }
  //fonction pour le snackBar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      
    });
  }

  createAccount() {
    this.islogin =true
    // var passwordHash = require('password-hash');

    // var hashedPassword = passwordHash.generate(this.register.password);
    // this.register.password = hashedPassword
    // console.log(this.register)
    
    if (!this.register.nom) {
      this.isnameNotvalid = true
    }
   if (this.register.nom.length < 2) {
      this.isnameShort = true;
    }
   if(!this.register.username){
      this.isprenomNotvalid  =  true
    }
    else{
      console.log(this.register)
      this.userservice.signUp(this.register).subscribe(
        data => {
          console.log(data)
          this.islogin = false
          this.openSnackBar("Inscription terminée avec succès", "")
          this.router.navigate(['loginUser']);
         
      },
      error => {
        console.log('error', error);
        if(error.status==200){
         
        }

      })
      //

    }

   
  }

}
