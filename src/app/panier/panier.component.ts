import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { UserService } from '../service/user.service';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  newUser = true;
  monpanier;
  image;
  client_id;
  finaliser_commande;
  isClientExist;
  totalPrix = 0;

  constructor(private router:Router, private articleservice:ArticleService ,private userservice:UserService) { }

  ngOnInit() {
   // recuperation de la commande
    this.monpanier= localStorage.getItem('panier');
    this.monpanier = JSON.parse( this.monpanier)
    console.log( "le  panier",this.monpanier)
    //calcul du prix total
    this.monpanier.forEach(element => {
      console.log("element", element)
      this.totalPrix = this.totalPrix+element.price;
      console.log(this.totalPrix)
      
    });
    //recuperation du client
    this.client_id = localStorage.getItem('user')
    this.client_id = JSON.parse(this.client_id)
    //console.log( "le clent au niveau ",this.client_id.data.currentUser.id)
    //console.log("le client",this.client)
     if(!this.client_id){
       this.isClientExist=false
  }
  else{
    this.isClientExist=true

  }
    //   this.getCommandeUser();
    // }
    console.log("le client",this.client_id)
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    this.finaliser_commande={
      totalPrix:'',
      client:{
        id:''
      },
      ligneCommande:[


      

      ]
    }

  }
  toggleForm() {
    if (this.newUser === true) {
      this.newUser = false;
      // this.buildFormLogin()
    } else {
      this.newUser = true
      // this.buildFormInscription()
    }
    
  }
  finaliser(){
    
    if(this.isClientExist){
      this.finaliser_commande ={
        totalPrix:this.totalPrix,
        client:{
          id:this.client_id.data.currentUser.id
    
        },
        ligneCommande:this.monpanier
      }
       
      console.log("la commande a envoyer",this.finaliser_commande)
      localStorage.setItem('commande' , JSON.stringify(this.finaliser_commande) );
      // this.router.navigate(['client']);  
      
      // this.userservice.finaliserCommande(this.finaliser_commande).subscribe(
      //   data => {
      //     console.log(data);    
      //     this.router.navigate(['client']);  
   
      // },
      // error => {
      //   console.log('error', error);
       
      // })
      
    }
    else{
     
    }
   
  }

  deleteItem(index){
    this.monpanier.splice(index)
    console.log(this.monpanier)
    localStorage.setItem('panier' , JSON.stringify(this.monpanier) );
    this.router.navigate(['panier']);


  }
  getCommandeUser(){
    //a definir
  }
}
