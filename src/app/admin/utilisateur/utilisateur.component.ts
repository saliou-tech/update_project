import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  listdesClients;
  dataSource;
  userCommande;
  showproduit;
  

  displayedColumns: string[] = ['id', 'username' ,'adresse','email','telephone','Actions'];
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private clientservie:UserService,private router:Router) { }

  ngOnInit() {
    this.getAllClient()
    
  }
  getAllClient(){
    
    this.clientservie.getAllClient().subscribe(
      data => {
        this.listdesClients = data;

        console.log( "liscommandes" ,this.listdesClients );
        
        this.dataSource = new MatTableDataSource(this.listdesClients);
        console.log( "les donnnes", this.dataSource)
        this.dataSource.paginator = this.paginator
  
    },
    error => {
      console.log('error', error);
    })

  

}


showCommandeClient(id){
  console.log(id)
  this.showproduit = true
  localStorage.setItem('voir_produit',JSON.stringify(this.showproduit))
  localStorage.setItem('id_client',JSON.stringify(id))
  this.router.navigate(['admin-client-commande']);  
      
  // this.clientservie.getCommandeUser(id).subscribe(
  //   data => {
  //     this.userCommande = data;

  //     console.log( "liscommandesclient" , this.userCommande);
  //     localStorage.setItem('usercommande',JSON.stringify(this.userCommande))
  //     this.router.navigate(['admin-client-commande']);  
  //     localStorage.setItem('id_client',JSON.stringify(id))

      
   

  // },
  // error => {
  //   console.log('error', error);
  // })
}



showModelecommande(id){
  console.log(id)
  this.showproduit = false
  localStorage.setItem('voir_produit',JSON.stringify(this.showproduit))
  localStorage.setItem('id_client',JSON.stringify(id))
  this.router.navigate(['admin-client-commande']); 

}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
