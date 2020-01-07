import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PanierService } from '../service/panier.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  checkEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
     }
  //isnameNotvalid;
  //isprenomNotvalid;
  //isnameShort;
  isemailNotvalid;
  //IsPhoneWritten ;
  hide = true;
  panierUser =[];
  // userForm: FormGroup;
  // connexion: FormGroup
  //connexion;
  // hide = true;
  // isNotShow = true
  userLogin;
  currentUser;
  ligneCommande;
  isFromCommande;
  isFromAcheter;
  sentToresumepanier;
  commande;
  islogin = false;
  // emailFormControl = new FormControl(
  //   '', [
  //   Validators.required,
  //   Validators.email,
  // ]
  
  // );
  // passwordFormControl = new FormControl(
  //   '', [
  //   Validators.required,

  // ]
  
  // );

  constructor(private panierservice:PanierService,private fb: FormBuilder,private router:Router ,private snackBar: MatSnackBar,private userservice:UserService) { }

  ngOnInit() {
this.commande= localStorage.getItem('commande_du_client' );
this.commande = JSON.parse( this.commande)
console.log( "la commande",this.commande)
//pour savoir àu se redriger si l'inscription est faiit
this.isFromCommande= JSON.parse(localStorage.getItem('fromcommande'));
console.log(this.isFromCommande)
if(this.isFromCommande){
  this.sentToresumepanier =true
}

//si il vient pour acheter
this.isFromCommande= JSON.parse(localStorage.getItem('fromacheter'));
console.log(this.isFromCommande)

    this.userLogin={
      username:'',
      password:''
   }
   //get commande 
   this.ligneCommande = JSON.parse(localStorage.getItem('panier'));

   console.log( "la panier",this.ligneCommande)
    
  }
  //fonction pour le snackBar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      
    });
  }
  // buildFormLogin() {
  //   this.connexion = this.fb.group({
  //      "email": ["",[Validators.required, Validators.email]],
  //      'password': ["",[Validators.required]],
  //     })
  //   }
  // showMotDePasse(){
  //   if(this.isNotShow){
  //     this.isNotShow = false
  //   }else{
  //     this.isNotShow = true
  //   }

  // }
  facebookLogin(){
    //this.islogin =true
      // console.log(this.userLogin)
      console.log("click")
      this.userservice.facebookLogin().subscribe(
        data => {
          console.log(data) 
          // this.postPanier()
          // console.log(this.postPanier);
          //this.islogin=false
  
          this.currentUser={
            data:data,
            nom:this.userLogin.username,
  
          } 
          console.log(this.currentUser)
  
          this.openSnackBar("Connexion reussi", "")
          //JSON.stringify(this.currentUser.data)
          localStorage.setItem('user',JSON.stringify(this.currentUser))
          if(this.sentToresumepanier){
            // this.commande= localStorage.getItem('commande_du_client' );
            // this.commande = JSON.parse( this.commande)
            // console.log( "la commande",this.commande)
            localStorage.setItem('user',JSON.stringify(this.currentUser))
            this.router.navigate(['resumepanier']);  
  
          }else{
            localStorage.setItem('user',JSON.stringify(this.currentUser))
            this.router.navigate(['panier']); 
          }
         
      },
      error => {
        console.log('error', error);
        if(error.status==200){
        
        }
  
      })

  }
 
  login(){
    this.islogin =true
 
  //  if (!this.checkEmailValid(this.userLogin.email)) {
  //   this.isemailNotvalid = true;
  //   console.log(this.isemailNotvalid)
  // performLogin = false;
  // }
  
    console.log(this.userLogin)
    this.userservice.signIn(this.userLogin).subscribe(
      data => {
        console.log(data) 
        // this.postPanier()
        // console.log(this.postPanier);
        this.islogin=false

        this.currentUser={
          data:data,
          nom:this.userLogin.username,

        } 
        console.log(this.currentUser)

        this.openSnackBar("Connexion reussi", "")
        //JSON.stringify(this.currentUser.data)
        localStorage.setItem('user',JSON.stringify(this.currentUser))
        if(this.sentToresumepanier){
          // this.commande= localStorage.getItem('commande_du_client' );
          // this.commande = JSON.parse( this.commande)
          // console.log( "la commande",this.commande)
          localStorage.setItem('user',JSON.stringify(this.currentUser))
          this.router.navigate(['resumepanier']);  

        }else{
          localStorage.setItem('user',JSON.stringify(this.currentUser))
          this.router.navigate(['panier']); 
        }
       
    },
    error => {
      console.log('error', error);
      if(error.status==200){
      
      }

    })

  
   

  

  //this.router.navigate(['panier'])

  }

// postPanier(){
//   this.panierservice.sendIntoPanier(this.ligneCommande).subscribe(
//     data => {
//       console.log(data);
//      this.panierUser = this.getPanierUser();
//      localStorage.setItem('panier',JSON.stringify(this.currentUser))
  

//   },
//   error => {
//     console.log('error', error);
//   })

// }

// getPanierUser(): any[] {

//     this.panierservice.getPanier().subscribe(
//       data => {
//         console.log(data);
//         this.panierUser = data; 

//     },
//     error => {
//       console.log('error', error);
//     })
    
//     return this.panierUser
  
//   }

 }
