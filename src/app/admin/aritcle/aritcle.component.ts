import { Component, OnInit,ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { CategorieService } from 'src/app/service/categorie.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';




@Component({
  selector: 'app-aritcle',
  templateUrl: './aritcle.component.html',
  styleUrls: ['./aritcle.component.css']
})
export class AritcleComponent implements OnInit {
  articles;
  countries = [
    {id: 1, name: "Habillement"},
    {id: 2, name: "Accessoire"},
    {id: 3, name: "Cafe"},
    // {id: 4, name: "Brazil"},
    // {id: 5, name: "England"}
  ];
  isNull;
 selectedValue = null;
 isold_price;
 listcategories;
 listarticles = [];
 listsouscategories;
 isavailable ;
 animal: string;
 name: string;
 url;
 articlesList=[];
 success;
 dataSource;
 
 displayedColumns: string[] = ['position', 'nom' ,'description','prixUnitaire','Actions'];

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private articleservice:ArticleService,private categorieservice:CategorieService) { }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    //this.dataSource.paginator = this.paginator;

    this.articles = {
        
        typeCategory:{
          id:'',
          name:''
        },
        nom:'',
        prixUnitaire:'',
        description:'',
       
        photoArticle:'',
        available:'',
        promo:'',
        selected:''
        // old_price:''


    }
    this.afficherCategorie();
    this.afficherSousCategorie();
    this.getArticles();
    this.dataSource.paginator = this.paginator

    
    
  }




  ajouterArticles(){
    if(this.articles.nom==""||this.articles.prixUnitaire==""||this.articles.typeCategory.id==""){
      this.isNull=true
    }else{
      var path = this.articles.photoArticle
    var filename = path.replace(/^.*\\/, "");
    console.log(filename);
    this.articles.photoArticle=filename
    console.log(this.articles);

    this.articleservice.addArticle(this.articles).subscribe(
      data => {
        console.log(data);
     

        this.getArticles()
     
       
      // $('#myModalAddCategorie').modal('show');
  
    },
    error => {
      console.log('error', error);
      if(error.status==200){
        this.success = "L'article a ete ajoute avec success!!!ajoutez une autre ou quitter"
        this.articles = {

        
          typeCateory:{
            id:'',
            name:''
          },
          nom:'',
          prixUnitaire:'',
          description:'',
         
          photoArticle:'',
          available:'',
          promo:'',
          selected:''
          // old_price:''

      }
      this.isNull=false

      }
    })
    }
  
    
  }

  supprimer(article){
    console.log(article.id);
    this.articleservice.deleteProduits(article.id).subscribe(
      data => {
        // this.token = data;
        console.log('item delete successfuly')
        console.log('response', data);
         this.getArticles();
      
    
    
      } ,
      error => {
        console.log('error', error);
        // this.iserrors = true;
      });

  }
 

  afficherCategorie(){
    this.categorieservice.readCategorie().subscribe(
      data => {
        this.listcategories = data;
        console.log(this.listcategories);
        for (let i = 0; i < this.listarticles.length; i++) {
          if (this.listarticles[i].available==1) {
            this.isavailable = true;
            console.log(this.isavailable)
            
          }else{
            this.isavailable=false;
            console.log(this.isavailable)
          }
          
        }
  
    },
    error => {
      console.log('error', error);
    })

  }

  afficherSousCategorie(){
    this.categorieservice.readSousCategorie().subscribe(
      data => {
        this.listsouscategories = data;
        console.log(this.listcategories);
  
    },
    error => {
      console.log('error', error);
    })

  }

  afficherAncienPrix(){
    if(this.articles.promo==1){
      this.isold_price = true;
      console.log(this.isold_price);
      return this.isold_price;
     
    }
    else{
      return false 
    }

  }

  getArticles(){
    this.articleservice.readArticles().subscribe(
      data => {
        this.listarticles = data;

        console.log( "listarticles" ,this.listarticles);
        
        this.dataSource = new MatTableDataSource(this.listarticles);
        console.log( "les donnnes",this.dataSource)
        this.dataSource.paginator = this.paginator
  
    },
    error => {
      console.log('error', error);
    })

  }


  // for image
  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }


