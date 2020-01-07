import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isPayment = true;
  clientInfo;
  isDescription;
  isDetailDescription;
  isnameNotvalid;
  isprenomNotvalid;
  isnameShort;
  isemailNotvalid;
  IsPhoneWritten ;
  ishide = false;
  commande;
  image;
  monpanier
  commande_to_save
  totalPrix=0
  client_id
  finaliser
  iscommande_valide=false
  commande_valide;
  facture;
  paiementCash;
  paiementOrangeMoney;
  
  // IsAdress1Written;
  // IsAdress2Written;
  // isAdress;


  checkEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
     }


  constructor(private articleservice:ArticleService,private userservice:UserService,private router:Router) { }

  ngOnInit() {
    this.iscommandevalide()
    // on recupere la commande au'on doit envoyer
    // this.commande_to_save= localStorage.getItem('commande');
    // this.commande_to_save= JSON.parse( this.monpanier)
    // console.log( "le  panier",this.commande_to_save)
    this.client_id = localStorage.getItem('user')
    this.client_id = JSON.parse(this.client_id)
    console.log("le client",this.client_id)

    this.monpanier= localStorage.getItem('panier' );
    this.monpanier = JSON.parse( this.monpanier)
    console.log( "le  panier",this.monpanier)
    // this.image = this.articleservice.baseurl+'/api/article/photo/'

    this.commande=localStorage.getItem('article' ); 
    this.commande = JSON.parse( this.commande)
    console.log( "la commande du client" ,this.commande)
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    this.monpanier.forEach(element => {
      console.log("element", element)
      this.totalPrix = this.totalPrix+element.price;
      console.log(this.totalPrix)
      
    });
    this.finaliser={
      totalPrix:'',
      client:{
        id:''
      },
      ligneCommande:[

]
    }
    this.facture={
      commande:{},
      client:{}
    }

    
  }
  afficherPayment() {
    if (!this.clientInfo.nom) {
      this.isnameNotvalid = true
    }
    else if (this.clientInfo.nom.length < 2) {
      this.isnameShort = true;
    }
    else if (!this.clientInfo.prenom) {
      this.isprenomNotvalid = true;
    }
    else if (!this.checkEmailValid(this.clientInfo.email)) {
      this.isemailNotvalid = true;
      console.log(this.isemailNotvalid)
    
      // performLogin = false;
    }
    else if(!this.clientInfo.telephone){
      this.IsPhoneWritten = true;
   }
  //  else if(!(this.IsAdress1Written && this.IsAdress2Written)){
  //    this.isAdress  = true

  //  }
    
 
    


    else {
      this.isnameNotvalid = false
      this.isnameShort = false
      this.isprenomNotvalid = false
      this.isemailNotvalid=false
      this.IsPhoneWritten = false;
   
      this.isPayment = true
      
      console.log(this.clientInfo)
    }



  }
  showDescription() {
    this.isDescription = true
    this.isDetailDescription = false
  }
  showDetailLivraison() {
    this.isDetailDescription = true
    this.isDescription = false
  }
 finaliser_commande(){
   console.log(this.paiementOrangeMoney)
   console.log(this.paiementCash)
   if(this.paiementCash==undefined && this.paiementOrangeMoney==undefined){
    $('#exampleModalCenter1').modal('show')

   }
   else{
    this.finaliser ={
      totalPrix:this.totalPrix,
      paiementOrangeMoney:this.paiementOrangeMoney,
      paiementCash:this.paiementCash,
      client:{
        id:this.client_id.data.currentUser.id
  
      },
      ligneCommande:this.monpanier
    }
    
     
    
    this.userservice.finaliserCommande(this.finaliser).subscribe(
      data => {
    //     this.facture={
    //  commande:this.finaliser,
    //  client:this.client_id
    //  }
    console.log("la facture",this.facture)
       
        console.log(data); 
        this.commande_valide = data
        this.iscommande_valide=true  
        $('#exampleModalCenter').modal('show')
        this.monpanier = []
        localStorage.setItem('panier',JSON.stringify(this.monpanier))
        
        
        console.log(this.iscommande_valide) 
        
  
    },
    error => {
      console.log('error', error);
     
    })
   }
  
  
}
iscommandevalide(){
  if(this.commande_valide){
    this.iscommande_valide=true 

  }else{
    this.iscommande_valide=true

  }
}


}
