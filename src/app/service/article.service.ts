import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // baseurl = 'http://localhost:8080';
  // baseurl = 'http://localhost:8080';
  baseurl =  'https://api-mouride-style-authentique.herokuapp.com'; 

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  // httpHeaders = new HttpHeaders({'Content-Type': 'application/json'  });

  constructor(private http: HttpClient) {

  }


  public addArticle(articles): Observable<any> {
    console.log(articles);
    return this.http.post(this.baseurl + '/api/article/save', articles);
  }




  public readArticles(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/article/listAll', { headers: this.httpHeaders });
  }

  public deleteProduits(id): Observable<any> {
    console.log(id);
    return this.http.delete(this.baseurl + '/api/article/delete/' + id + '/', { headers: this.httpHeaders });

  }


  public ArticleById(id): Observable<any> {
    console.log(id);
    return this.http.get(this.baseurl + '/api/article/articles/' + id + '/');


  }
  ArticleByIdCat(id):Observable<any> {
    console.log(id);
    return this.http.get(this.baseurl + '/api/article/articleType/' + id + '/');
  }

  SaveClientCommande(commande):Observable<any> {
    console.log(commande);
    return this.http.post(this.baseurl +'/api/mesure/save',commande);
  }

  SaveCommande(commande):Observable<any> {
    console.log("la commande ",commande);
    return this.http.post(this.baseurl + '/api/commande/saveCommande',commande);
  }

  // SaveCommandeClient(commande):Observable<any> {
  //   console.log("la commande ",commande);
  //   return this.http.post(this.baseurl + '/mesure/save',commande);
  // }

  SaveMesureCommande(mesureducommande):Observable<any> {
    console.log(mesureducommande);
    return this.http.post(this.baseurl + '/api/commande/saveCommande',mesureducommande);
  }


  

  
  


 
}
