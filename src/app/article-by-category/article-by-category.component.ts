import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { CategorieService } from '../service/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-by-category',
  templateUrl: './article-by-category.component.html',
  styleUrls: ['./article-by-category.component.css']
})
export class ArticleByCategoryComponent implements OnInit {
  categorie;
  articlebycategorie;
  image;
  listarticles=[];
  lastlistarticles = [];
  isHabillements;


  constructor(private categorieservice:CategorieService,private articleservice:ArticleService,private route:ActivatedRoute,private router:Router
    ) {
      route.params.subscribe(val => {
        // put the code from `ngOnInit` here
        
         this.categorie= localStorage.getItem('categorie');
         console.log(this.categorie);
         if(this.categorie == 'Habillements'||'habillement'||'Habillement'||'habillements'){
          this.isHabillements = true;
          console.log(this.isHabillements)
         
        }
      

      
      });
     
     }

  ngOnInit() {
    
    // this.ArticleById();
   
    // this.ArticleByCategorie()
    this.ArticleByCategorie()
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    
    
  }

  ArticleByCategorie(){
    console.log(this.categorie);
   
    this.categorieservice.ArticleByCategorie(this.categorie).subscribe(
      data => {
        this.articlebycategorie = data;
        // for (let index = 0; index < this.articlebycategorie[0].typeCategories.length; index++) {
        //   const element = this.articlebycategorie.typeCategories[index];
        //   console.log(element)
          
        // }
        this.articlebycategorie[0].typeCategories.forEach(element => {
          // console.log(element)
          this.listarticles.push(element)
          // console.log(this.listarticles)
        
      });
      this.listarticles = this.listarticles
      console.log(this.listarticles)
      this.listarticles.forEach(element => {
        console.log(element.articleEntities)
        this.lastlistarticles.push(element.articleEntities)  
      });
      this.lastlistarticles = this.lastlistarticles
      console.log(this.lastlistarticles)
      // console.log(this.listarticles[0].articleEntities)
      // console.log(this.listarticles[1].articleEntities)

        // console.log(this.articlebycategorie[0].typeCategories);
        

  
    },
    error => {
      console.log('error', error);
    })
  }
  articleView(articles){
    console.log(articles);
     localStorage.setItem('article' , articles.idArt );
     this.router.navigate(['view-product' , articles.idArt]);
  }

  articleClientView(articles){
    localStorage.setItem('article' , JSON.stringify(articles));
     this.router.navigate(['commande']);

  }
  articleCommandeView(articles){
    console.log(articles);
    // localStorage.setItem('article' , JSON.stringify(articles));
    
    localStorage.setItem('article' , articles.idArt );
    this.router.navigate(['view-product' , articles.idArt]);

  }
    

}
