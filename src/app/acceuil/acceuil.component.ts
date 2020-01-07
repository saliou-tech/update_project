import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  listarticles;
  image;
  listallinfos;
  isHabillements
  categorieHabillements;
  Habilements =['Habillements','Habillement','habillement','habillements']

  constructor(private articleservice:ArticleService , private router: Router,private apicategorie:CategorieService)  { }

  ngOnInit() {
    this.afficherArticle()
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    console.log(this.image)
    this.allArticleInfo()
    this.Habilements.forEach(element => {
      this.categorieHabillements=element
    });
  }


  afficherArticle(){
    this.articleservice.readArticles().subscribe(
      data => {
        this.listarticles = data;
        console.log(this.listarticles);

        // if(this.listarticles.nom === 'test' ||
        // this.listarticles.nom === 'Baye Lahad' ||
        // this.listarticles.nom === 'Baye Sonhibou' ||
        // this.listarticles.nom === 'Tourki Ndiareme' ||
        // this.listarticles.nom === 'Khaftaane Simple' 
        // )
        // {
        //   this.isHabillements=true
        //   console.log(this.isHabillements)
        // }
       
        
        
  
    },
    error => {
      console.log('error', error);
    })
  }
  // afficher tous les infos surr l'article
  allArticleInfo(){
    this.apicategorie.readCategorie().subscribe(
      data => {
        this.listallinfos = data;
        console.log("kknkkkkk",this.listallinfos);
        
        
        // else{
        //   this.isHabillements = false
        // }
        // this.listallinfos.forEach(element => {

        //   if(element.name==="Habilements"){
        //     this.isHabillements = true

        //   }
          
        // });
        
       
  
    },
    error => {
      console.log('error', error);
    })

  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.image = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  Articleview(article){
    console.log(article);
     localStorage.setItem('article' , article.idArt );
     this.router.navigate(['view-product' , article.idArt]);
  }


  commandeView(article){
    console.log(article);
     localStorage.setItem('article' , JSON.stringify(article));
     this.router.navigate(['commande']);
  }





}
