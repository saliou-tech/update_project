import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-client-commande',
  templateUrl: './client-commande.component.html',
  styleUrls: ['./client-commande.component.css']
})
export class ClientCommandeComponent implements OnInit {
  clientcommande;
  id;
  ismesure;
  user ;
  mesure;
  dataSource;
  displayed ;
  showproduit;
  listmesure ;
  commandeduclient =[]
  displayedColumns: string[] = ['id', 'price' ,'quantite','prixTotalArticle','Actions'];
  displayedColumn: string[] = ['idNouModel', 'typeTissu' ,'nombreDeMetre','couleur','model','adresseLivraison','dateLivraison','dateCommande','paiementCash','paiementOrangeMoney','Actions'];
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private clientservie:UserService) { }

  ngOnInit() {
    this.clientcommande= JSON.parse(localStorage.getItem('usercommande'));
    console.log('le cliient', this.clientcommande)
    this.id= JSON.parse(localStorage.getItem('id_client'));
    console.log(this.id)
    this.showproduit= JSON.parse(localStorage.getItem('voir_produit'));
    console.log(this.showproduit)
    this.getClientById();
    this.user ={
        id: '',
        nom: '',
        username: '',
        adresse: '',
        email: '',
        telephone: '',
        repassword: '',
        roles: [],
        commande:  [],
        nouveauModels:  []
            }

  }
  getClientById(){
    console.log(this.id)
    this.clientservie.getUserById(this.id).subscribe(
      data => {
        this.user = data;
  
        console.log( "le client" , this.user);
        console.log("les donnesss",this.user.commande)
        if(this.showproduit){
          for (let i = 0; i<this.user.commande.length;i++) {
            for(const commande of this.user.commande[i].ligneCommandes){
              this.commandeduclient.push({
                idLign:commande.idLign,
                price:commande.price,
                quantite:commande.quantite,
                prixTotalArticle:commande.prixTotalArticle
              })
              
            }
    
              console.log("le commande du client",this.commandeduclient)
            }
            console.log("le commande du client",this.commandeduclient)
            
            this.dataSource = new MatTableDataSource(this.commandeduclient);
            console.log( "les donnnes", this.dataSource)
            this.dataSource.paginator = this.paginator

        }
        else{
          this.dataSource = new MatTableDataSource(this.user.nouveauModels);
          console.log( "les donnnes", this.dataSource)
          this.dataSource.paginator = this.paginator

        }
   
  
    },
    error => {
      console.log('error', error);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showMesureCommande(element){
    console.log(element)
    this.ismesure = true
    this.mesure = element.mesures[0]
    console.log( "la mesure",this.mesure)
    //console.log(element.mesures[0].taille)

    if (this.mesure.taille=='') {
      
    this.displayed = [ 'longueur', 'coud', 'épaule', 'hance'];
       this.listmesure = [ 
        this.mesure.longueur,
        this.mesure.coud,
         this.mesure.epaule,
         this.mesure.hance,
       
      ]
     }
    else{
      this.displayed = [ 'taille'];
      this.listmesure = [ 
         this.mesure.taille,
    
       ]

     }
  }
  showCommandeClient(element){
    console.log(element)

  }

}
