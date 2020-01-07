import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
    // baseurl = 'http://localhost:8080';
    // baseurl = 'http://localhost:8080';
     baseurl =  'https://api-mouride-style-authentique.herokuapp.com'; 
  
    httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    // httpHeaders = new HttpHeaders({'Content-Type': 'application/json'  });

  constructor(private http: HttpClient) { }

  public getAllCommandes(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/commande/getallcommande', { headers: this.httpHeaders });
  }


  public findCommandeById(id): Observable<any> {
    console.log(id);
    return this.http.get(this.baseurl + '/api/commande/getcommande/' + id + '/');


  }
}
