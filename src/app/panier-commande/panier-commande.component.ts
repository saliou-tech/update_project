import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.css']
})
export class PanierCommandeComponent implements OnInit {
  macommande;
  mamesure;
  commande;
  listcommande;
  listmesure;
  image;
  displayedColumn;
  client;
  commande_to_send;
  iscommandsend=true;
  displayedColumns = ['typeTissu', 'nombreDeMetre', 'couleur', 'model', 'dateLivraison', 'adresseLivraison'];
  
  showmodal;

  // transactions: [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];

  /** Gets the total cost of all transactions. */
 

  constructor(private articleservice:ArticleService) { }

  ngOnInit() {
    //le client
    this.client = localStorage.getItem('user')
    this.client = JSON.parse(this.client)
    //console.log('le client', this.client)
    console.log("le client",this.client.data.currentUser.id)
    this.commande= localStorage.getItem('commande_du_client' );
    this.commande = JSON.parse( this.commande)
    
    console.log( "la commande",this.commande)
    
   
    this.image = this.articleservice.baseurl+'/api/article/photo/'

    localStorage.setItem('user',JSON.stringify(this.client))


   
    this.listcommande = [ 
      this.commande[0].NouveauModel.typeTissu,
      this.commande[0].NouveauModel.nombreDeMetre,
      this.commande[0].NouveauModel.couleur,
      this.commande[0].NouveauModel.model,
      this.commande[0].NouveauModel.dateLivraison,
      this.commande[0].NouveauModel.adresseLivraison
    ]

  
   
    if (this.commande[0].mesure.taille=='') {
      // console.log( "si la taille existe",this.commande[0].mesure.taille)
      this.displayedColumn = [ 'longueur', 'coud', 'épaule', 'hance'];
      this.listmesure = [ 
        this.commande[0].mesure.longueur,
        this.commande[0].mesure.coud,
        this.commande[0].mesure.epaule,
        this.commande[0].mesure.hance,
       
      ]
    }
    else{
      this.displayedColumn = [ 'taille'];
      this.listmesure = [ 
        this.commande[0].mesure.taille,
    
      ]

    }

    
  }
 

  sauvegarder(){
    this.iscommandsend=false
  }
  sendComande(){
    this.commande_to_send={
      TypeTissu:this.commande[0].NouveauModel.typeTissu,
      nombreDeMetre:this.commande[0].NouveauModel.nombreDeMetre,
      couleur:this.commande[0].NouveauModel.couleur,
      model:this.commande[0].NouveauModel.model,
      dateLivraison:this.commande[0].NouveauModel.dateLivraison,
      adresseLivraison:this.commande[0].NouveauModel.adresseLivraison,
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
    // this.articleservice.SaveClientCommande( this.commande_to_send).subscribe(
    //   data => {
    //     console.log(data)
    //     console.log("detail commande enregistre")
       
    // },
    // error => {
    //   console.log('error', error);
    //   if(error.status==200){
    //     this.showmodal = true
    //     console.log(this.showmodal)
    //   }
    // })

  }
}
