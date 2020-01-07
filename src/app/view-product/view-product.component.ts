import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PanierComponent } from '../panier/panier.component';
import { ViewProductOnPanierComponent } from '../view-product-on-panier/view-product-on-panier.component';
import { ClientComponent } from '../client/client.component';
import { Router } from '@angular/router';
// import {LocalStorageService} from 'ngx-localstorage';
import { PanierService } from '../service/panier.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id;
  article={
    idArt: '',
    nom: '',
    prixUnitaire:'',
    description: '',
    available: '',
    promo: '',
        };
  image;
  ispanier;
  added;
  ligneCommande= [];
  panier={}
  client_id;
  isClientExist
  panierUser =[]
  macommande

  

  constructor(private panierservice:PanierService ,private articleservice:ArticleService,public dialog: MatDialog, private router:Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('article');
    console.log(this.id);
    this.ArticleById();
    this.client_id = localStorage.getItem('user')
    this.client_id = JSON.parse(this.client_id)
    //console.log("le client",this.client)
    if(this.client_id){
      this.isClientExist=true
    }
    this.image = this.articleservice.baseurl+'/api/article/photo/'+this.id;
    this.ligneCommande=[{
      prix:'',
      price:'',
      quantite:'',
      articleEntity:{
        idArt:'',
        nom:''
     }

    }]
  }

  ArticleById(){
    console.log(this.id);
    this.articleservice.ArticleById(this.id).subscribe(
      data => {
        this.article = data;
        console.log(this.article);
  
    },
    error => {
      console.log('error', error);
    })
    


  }
  

ajouterAuPanier(commande){
  this.added=false
  
  console.log("la commande kon veur ",commande)
  //console.log(this.commandeDetail)
  //console.log( " le panier",this.ligneCommande)
  // si le panier est vide
  
  this.ligneCommande = JSON.parse(localStorage.getItem('panier'));

  console.log( "la panier",this.ligneCommande)

  if (this.ligneCommande==null) {
    this.ligneCommande=[]

    console.log("on est sur donc k le panier est vide",this.ligneCommande)
    this.ligneCommande.push({
      prix:commande.prixUnitaire,
      quantite: 1,
      price:commande.prixUnitaire,
      articleEntity:{
         idArt:commande.idArt,
         nom:commande.nom
      }
      
    
      
    });
    console.log(" la liste ",this.ligneCommande);
    
  }
//si le panier est non vide et on ajoute la meme commande 
else{
  for(let i= 0; i < this.ligneCommande.length; i++) {
    const article =  this.ligneCommande[i]
    console.log("l'article dans la oucle",article)

    console.log( "commande de i ",this.ligneCommande[i]);
    console.log( "l'id du commande", commande.idArt)
    console.log("l'id de l'article",article.articleEntity.idArt)
    if (commande.idArt === article.articleEntity.idArt) {
      console.log('si c le mm article')
      //prix:commande.prixUnitaire
      article.prix = commande.prixUnitaire
      article.quantite+=1;
      article.price=article.price+commande.prixUnitaire
      this.added=true
    }
    //Si le panier est non vide et ne contient pas l'article
 
    
  }
  if(!this.added){
    this.ligneCommande.push({
      prix:commande.prixUnitaire,
      quantite: 1,
      price:commande.prixUnitaire,
      articleEntity:{
         idArt:commande.idArt,
         nom:commande.nom
      }
   // sousTotal: commande.prixUnitaitre
  })
  
  }

}

localStorage.setItem('panier' , JSON.stringify(this.ligneCommande) );
console.log('g atteint')
if(!this.client_id){
  this.router.navigate(['panier']);
}
else{
  console.log( "la commande",this.ligneCommande)
  localStorage.setItem('client_id' , this.client_id );
  this.router.navigate(['panier']);
  // this.macommande ={
  //   client:{
  //     id:this.

  //   },
  //   ligneCommande:[
  //     {
  //       quantite:this.ligneCommande[0].quantite,
  //       articleEntity:{
  //        idArt:this.ligneCommande[0].articleEntity.id,
  //         nom:this.ligneCommande[0].nom
  //   }
  //     }
  //   ]
    

  // }


  //this.userservice.finaliserCommande(this.macommande).subscribe(
    //data => {
     // console.log(data);
    //  this.panierUser = this.getPanierUser();
    //  localStorage.setItem('panier',JSON.stringify(this.panierUser))
    //  this.router.navigate(['panier']);
   // this.router.navigate(['panier']);
     
  

 // },
  //error => {
   // console.log('error', error);
 // })

}

//this.router.navigate(['loginUser']);
//$('#exampleModalCenter').modal('hide');

}

AddToCart(commande){
  console.log(commande)
//si le panier es vide 
  // this.panier={
  //   id:commande.idArt

  // }

}
// getPanierUser(): any[] {

//   this.panierservice.getPanier().subscribe(
//     data => {
//       console.log(data);
//       this.panierUser = data;

    

//   },
//   error => {
//     console.log('error', error);
//   })

//   return this.panierUser

// }


}
