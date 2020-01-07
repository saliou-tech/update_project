import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-by-souscategorie',
  templateUrl: './article-by-souscategorie.component.html',
  styleUrls: ['./article-by-souscategorie.component.css']
})
export class ArticleBySouscategorieComponent implements OnInit {
  idcat;
  articlebycategorie;
  image;

  constructor(private articleservice:ArticleService,private  router:Router) { }

  ngOnInit() {
    this.idcat= localStorage.getItem('souscategorie');
    console.log(this.idcat)
    this.image = this.articleservice.baseurl+'/api/article/photo/'
    this.ArticleByIdCat()
  }

  ArticleByIdCat(){
    console.log(this.idcat);
    this.articleservice.ArticleByIdCat(this.idcat).subscribe(
      data => {
        console.log(data)
        this.articlebycategorie = data
        console.log(this.articlebycategorie)
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
    


}
