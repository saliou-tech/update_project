import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  // baseurl = 'http://localhost:8080';
  baseurl =  'https://api-mouride-style-authentique.herokuapp.com';

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

  }


  public addCategorie(categories): Observable<any> {
    console.log(categories);
    return this.http.post(this.baseurl + '/api/category/save', categories);
  }

  public addSousCategorie(categories): Observable<any> {
    console.log(categories);
    return this.http.post(this.baseurl + '/api/typecategori/save', categories);
  }


  public EditCategorie(categories): Observable<any> {
    console.log(categories);
    return this.http.put(this.baseurl + '/api/typecategori/save', categories);
  }



  public readCategorie(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/category/listAll', { headers: this.httpHeaders });
  }

  public readSousCategorie(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/typecategori/listAll', { headers: this.httpHeaders });
  }

  public ArticleByCategorie(categorie): Observable<any> {
    console.log(categorie);
    return this.http.get(this.baseurl + '/api/category/categorie/' + categorie + '/');

  }
}
