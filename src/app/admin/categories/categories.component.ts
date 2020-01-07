import { Component, OnInit ,ViewChild } from '@angular/core';
import { CategorieService } from 'src/app/service/categorie.service';
import { identifierModuleUrl } from '@angular/compiler';
import * as $ from "jquery";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories_to_post;
  listcategories=[];
  souscategories;
  category_entity_id;
  categorie_to_edit;
  showmodal;
  listSouscategories;
  success;
  isadded;
  error;
  succes_categorie;
  isPageLoading;
  isNameNull;
  displayedColumns: string[] = ['position','name', 'description','Actions'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource;
  




  countries = [
    { name: "Habillement"},
    {name: "Accessoire"},
    { name: "Cafe"},
    // {id: 4, name: "Brazil"},
    // {id: 5, name: "England"}
  ];
 selectedValue = null;

  constructor(private categorieservice:CategorieService) { }

  ngOnInit() {
    
    this.categories_to_post = {
    
      name:'',
    
      description:''
    }
    this.souscategories = {
      // category_entity_id: null,
      // nom:''
      
      nom:'',
      categoryEntity:{},
       }
       this.afficherCategorie();
       this.afficherSousCategorie();
      // this.dataSource = new MatTableDataSource(this.listcategories);
       console.log(this.dataSource)
      


    //    $(document).ready(function() {
    //     $('#example').DataTable({
    //       "paging": true
    //     });
    //     $('.dataTables_length').addClass('bs-select');
    // } );
    
    
    
    
    
  }

  ajoutezCategories(){
    console.log(this.categories_to_post);

    this.isPageLoading = true;
    if(this.categories_to_post.name==''){
      this.isNameNull = true;
    }
    else{
      this.isNameNull = false;
      this.categorieservice.addCategorie(this.categories_to_post).subscribe(
      data => {
        console.log(data);
        this.isPageLoading=false;
        this.afficherCategorie();
        this.succes_categorie ="la Categorie est ajouté avec success"
        this.categories_to_post={
          name:'',
    
          description:''

        }
        this.succes_categorie=" categorie ajoutée!!!! ajoutez une autre? ou quitter"
       

        //  $('#myModalAddCategorie').modal('hide');
      
  
    },
    error => {
      console.log('error', error);
      
    })}
   

   
    
  }



  afficherCategorie(){
    this.categorieservice.readCategorie().subscribe(
      data => {
        this.listcategories = data;
        console.log("list",this.listcategories);
        this.dataSource = new MatTableDataSource(this.listcategories);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator



  
    },
    error => {
      console.log('error', error);
    })

  }
  ajoutezSousCategories(){
    this.isPageLoading = true;
    
    this.souscategories  = {
      name : this.souscategories.nom,

      categoryEntity:{
        id:this.souscategories.categoryEntity.id
      }
    }
    console.log( this.souscategories);
    if(this.souscategories.name == "" || !this.souscategories.categoryEntity.id == undefined){
      this.isNameNull=true
    }
    else
    {
      console.log(this.souscategories);
      this.categorieservice.addSousCategorie(this.souscategories).subscribe(
        data => {
          console.log(data);
          this.isPageLoading = false;
          this.success="Categorie ajoute avec succes "
          this.isNameNull=false
          this.afficherSousCategorie()
        
    
      },
      error => {
        console.log('error', error);
        this.error = "oops une erreure est survenue lors de l'ajout"
        
      })
    }
    
   
    // $('#myModalAddSousCategorie').modal('hide');
  }
  afficherSousCategorie(){
    this.categorieservice.readSousCategorie().subscribe(
      data => {
        this.listSouscategories = data;
        console.log(this.listcategories);
  
    },
    error => {
      console.log('error', error);
    })

  }
  EditCategorie(categorie_to_edit){
    this.showmodal = true;
    console.log(categorie_to_edit);
    this.categorie_to_edit = {
      name:categorie_to_edit.name,
      description:categorie_to_edit.description
    }
    return this.categorie_to_edit;
   }
   modifierCategorie(){
     this.categorie_to_edit = this.EditCategorie(this.categorie_to_edit)
     
    this.categorieservice.EditCategorie(   this.categorie_to_edit ).subscribe(
      data => {
        console.log(data);
       
  
    },
    error => {
      console.log('error', error);
      
    })
     
    //  console.log(this.categorie_to_edit)
   }

   //openSousCategorie(){
    // console.log("eee")
    
  // $('#myModalAddCategorie').modal('show')
    

    // $('#myModalAddSousCategorie').modal('hide')
   //}
  
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
