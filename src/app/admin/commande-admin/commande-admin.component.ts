import { Component, OnInit,ViewChild } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.css']
})
export class CommandeAdminComponent implements OnInit {
  listAllcommandes;
  dataSource;

  displayedColumns: string[] = ['idCom', 'date_du_commande' ,'prix','Actions'];
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private commandeservice:CommandeService) { }

  ngOnInit() {
    this.getAllCommande()
    // this.dataSource.paginator = this.paginator
  }

  getAllCommande(){
    
      this.commandeservice.getAllCommandes().subscribe(
        data => {
          this.listAllcommandes = data;
  
          console.log( "liscommandes" ,this.listAllcommandes);
          
          this.dataSource = new MatTableDataSource(this.listAllcommandes);
          console.log( "les donnnes",this.dataSource)
          this.dataSource.paginator = this.paginator
    
      },
      error => {
        console.log('error', error);
      })
  
    

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showCommande(element){
    console.log(element)
    this.commandeservice.findCommandeById(element).subscribe(
      data => {
        //  data;

        console.log( "commande by id" ,data);
        
        // this.dataSource = new MatTableDataSource(this.listAllcommandes);
        // console.log( "les donnnes",this.dataSource)
        // this.dataSource.paginator = this.paginator
  
    },
    error => {
      console.log('error', error);
    })
  }
}
