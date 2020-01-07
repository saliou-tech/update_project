import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import * as bootstrap from "bootstrap";
// import * as $ from "jquery";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  
  commande;
  image;
  ispaiement=false;
  isPayment=true;
  paiementCash;
  paiementOrangeMoney;
  commande_to_send;
  showmodal;
  isDetailDescription ;
  isDescription;
  commande_valide;
  iscommande_valide
  client_string
client={
    data:{
      currentUser:{
        id:'',
        username:'',
        nom:''
      }
    },
    nom:''
  }
  
  constructor(private articleservice:ArticleService) { }

  ngOnInit() {
    
    this.iscommandevalide()
      //le client
      this.client_string= localStorage.getItem('user')
      this.client = JSON.parse(this. client_string)
      console.log('le client', this.client)
      console.log("le client",this.client.data.currentUser.username)
      this.commande= localStorage.getItem('commande_du_client' );
      this.commande = JSON.parse( this.commande)
      console.log( "la commande",this.commande)
     
      this.image = this.articleservice.baseurl+'/api/article/photo/'
  }

  showDescription() {
    this.isDescription = true
    this.isDetailDescription = false
  }
  showDetailLivraison() {
    this.isDetailDescription = true
    this.isDescription = false
  }
  iscommandevalide(){
    if(this.commande_valide){
      this.iscommande_valide=true 
  
    }else{
      this.iscommande_valide=true
  
    }
  }

 sendNewCommande(){
   console.log(this.paiementCash)
   console.log(this.paiementOrangeMoney)
if(this.paiementCash==undefined && this.paiementOrangeMoney==undefined){
  this.ispaiement = true
  $('#exampleModalCenter1').modal('show')
}else{
  this.commande_to_send={
    typeTissu:this.commande[0].NouveauModel.typeTissu,
    nombreDeMetre:this.commande[0].NouveauModel.nombreDeMetre,
    couleur:this.commande[0].NouveauModel.couleur,
    model:this.commande[0].NouveauModel.model,
    dateLivraison:this.commande[0].NouveauModel.dateLivraison,
    adresseLivraison:this.commande[0].NouveauModel.adresseLivraison,
    paiementCash:this.paiementCash,
    paiementOrangeMoney:this.paiementOrangeMoney,
        mesures:[{
          longueur:this.commande[0].mesure.longueur,
          coud:this.commande[0].mesure.coud,
          epaule:this.commande[0].mesure.epaule,
          hance:this.commande[0].mesure.hance,
          taille:this.commande[0].mesure.taille,
          articleEntity:{
            idArt:this.commande[0].articleEntity.idArt
            
          }

        }],
   
    client:{
      id:this.client.data.currentUser.id
    }   

  }
  console.log(this.commande_to_send)
  this.articleservice.SaveClientCommande( this.commande_to_send).subscribe(
    data => {
      console.log(data)
      console.log("detail commande enregistre")
     
  },
  error => {
    console.log('error', error);
    if(error.status==200){
      $('#exampleModalCenter').modal('show')
      // this.showmodal = true
      // this.iscommandevalide()
      // this.iscommande_valide=true 
      // console.log(this.showmodal)
    }
  })

}
  
}

}



