import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  //isClient = false;
  isCommande = true;
  isMesure = false;
  isAdresse = true;
  commande;
  image;
  clientdetail;
  commande_detail;
  couleurTissue = ['choisir la couleur du tissu','bleu','blanc' , 'rouge' ,'vert' ,'ndiakhass','violet','mauve','jaune','vert','orange' ]
  TypeTissue = ['choisir le type de tissu ','Dietzner','ganila' , 'brode' ,'soie' ,'vaulour' ]
  commandeDetail;
  isMyMesure;
  istaille;
  mesureDetail;
  typeDeTaille = ['XXS','XS','M','L','XL','XXL','XXXL','XL']
  ligneCommande = [];
  added;
  client_id;
  isClientExiste;
  gotoresume;
 


  constructor(private articleservice:ArticleService,private router :Router) { }

  ngOnInit() {
    //le client
    this.client_id = localStorage.getItem('user')
    this.client_id = JSON.parse(this.client_id)
    console.log("le client",this.client_id)
    if(this.client_id!=null){
      this.isClientExiste = true
    }
    this.commande= localStorage.getItem('article' );
    this.commande = JSON.parse( this.commande)
    console.log( "la commande",this.commande)
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    this.clientdetail = {
      nom:'',
      prenom:'',
      email:'',
      telephone:'',
      adress:'',
      adress2 : '',
      region:'',
      ville:''
    }
    // if(this.isMyMesure){
    //   this.mesureDetail.taille=''
    // }

    this.commandeDetail = {
    typeTissu:'',
    nombreDeMetre:'',
    couleur:'',
    model:this.commande.nom,
    adresseLivraison:'',
    dateLivraison:'',
    dateCommande:''
    }
    this.mesureDetail = {
      taille:'',
      longueur:'',
      coud:'',
      epaule:'',
      hance:''

    }
    console.log(this.commandeDetail.model)
    // this.ajouterAuPanier();
  }

  // formlaire
  // methode pour afficher le deuxieme formulaire
  // enregistrerclient(){
  //   this.isClient = false;
  //   this.isCommande  =true;
  //   this.isMesure = false;
  //   console.log(this.clientdetail)
  //   this.articleservice.SaveClientCommande(this.clientdetail).subscribe(
  //     data => {
  //       console.log(data)
  //       console.log("detail client enregistre")
        
  //   },
  //   error => {
  //     console.log('error', error);
  //   })
  // }
  enregistrerCommande(){
    //this.isClient = false;
    this.isCommande  =false;
    this.isMesure = true;
    console.log(this.commandeDetail)
    localStorage.setItem('commande',JSON.stringify(this.commandeDetail))
    // this.articleservice.SaveCommande(this.commandeDetail).subscribe(
    //   data => {
    //     console.log(data)
    //     console.log("detail commande enregistre")
       
    // },
    // error => {
    //   console.log('error', error);
    // })

  }
  enregistrerMesure(){
    console.log(this.mesureDetail)
    localStorage.setItem('mesure', JSON.stringify(this.mesureDetail))
    // this.articleservice.SaveMesureCommande(this.mesureDetail).subscribe(
    //   data => {
    //     console.log(data)
    //     console.log("detail mesure enregistre")
       
    // },
    // error => {
    //   console.log('error', error);
    // })
  }
  choisirTaille(){
    this.istaille = true
    this.isMyMesure = false
  }

  choisirMesure(){
    this.istaille = false
    this.isMyMesure = true
  }

  enregistrer(){
   // $('#exampleModalCenter').modal('show');
    //this.router.navigate(['panier']);
  }
  // finaliserCommande(){
 

  // }
  
  ajouterAuPanier(commande){
    console.log("la commande dans le methode",commande)
    if(this.isClientExiste){
    this.commande_detail=[{
      articleEntity:{
        idArt:commande.idArt,
        nom:commande.nom,
        prixUnitaire:commande.prixUnitaire

      },
      NouveauModel:this.commandeDetail,
      mesure:this.mesureDetail,
      client:{id:this.client_id.data.id}

    }]

    console.log("detailcommande", this.commande_detail)
    localStorage.setItem('commande_du_client' , JSON.stringify(this.commande_detail) );
    this.router.navigate(['resumepanier']);
  }else{
    this.gotoresume = true
    this.commande_detail=[{
      articleEntity:{
        idArt:commande.idArt,
        nom:commande.nom,
        prixUnitaire:commande.prixUnitaire
      },
      NouveauModel:this.commandeDetail,
      mesure:this.mesureDetail,
      //client:{id:this.client_id.data.id}

    }]
    localStorage.setItem('fromcommande' , JSON.stringify( this.gotoresume) );
    localStorage.setItem('commande_du_client' , JSON.stringify(this.commande_detail) );
    this.router.navigate(['loginUser']);

  }
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.commandeDetail={
      type_tissu:'',
      couleur_tissu:'',
      nbr_metre:'',
      model:this.commande.nom,
      date_livraison:'',
      adresse_livraison: '',
      region:'',
      ville:''
    }
  }
  onSubmit(form:NgForm){
    this.commandeDetail.registerUser(form.value).subscribe(
      (data:any)=>{
              this.resetForm(form);
           }
    )
    // this.userService.registerUser(form.value).subscribe(
    //   (data:any)=>{
    //      this.resetForm(form);
    //   }
    
    // ) 
     }
}
     


    // this.added=false
    
    // console.log("la commande", commande)
    // console.log(this.commandeDetail)
    // console.log( " le panier",this.ligneCommande)
    // si le panier est vide 
    // if (this.ligneCommande.length===0) {
    
    //   this.ligneCommande = []
    //   console.log(this.ligneCommande)
    //   this.ligneCommande.push({
    //     price:commande.prixUnitaitre,
    //     quantite: 1,
    //     articleEntity:{
    //        id:commande.idArt,
    //        nom:commande.nom
    //     } 
        // nom:this.commande.nom,
        // description:this.commande.description,
        
       // sousTotal:this.commande.prixUnitaitre*quantite
        
    //   });
    //   console.log(" la liste ",this.ligneCommande);
      
    // }
  //si le panier est non vide et on ajoute la meme commande 
  // else{
  //   for(let i= 0; i < this.ligneCommande.length; i++) {
  //     const article =  this.ligneCommande[i]

  //     console.log( "commande de i ",this.ligneCommande[i]);
  //     console.log(commande.idArt)
  //     console.log(article.commande.idArt)
  //     if (commande.idArt === article.commande.idArt) {
  //       article.quantite+=1;
  //       article.prixUnitaitre=article.prixUnitaitre+commande.prixUnitaitre
  //       this.added=true
  //     }
      //Si le panier est non vide et ne contient pas l'article
    // if(!this.added){
    //   this.ligneCommande.push({
    //     price:commande.prixUnitaitre,
    //     quantite: 1,
    //     articleEntity:{
    //        id:commande.idArt,
    //        nom:commande.nom
    //     }
     // sousTotal: commande.prixUnitaitre
  //   })

  // }
      
  //   }
  // }
  
  // localStorage.setItem('panier' , JSON.stringify(this.ligneCommande) );
  // this.router.navigate(['resumepanier']);
  //$('#exampleModalCenter').modal('hide');

  

