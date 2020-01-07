import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  baseurl = 'http://localhost:8080';

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    
   }

   public sendIntoPanier(lignecommande): Observable<any> {
    console.log("dans le service",lignecommande);
    return this.http.post(this.baseurl + '/api/panier/save', lignecommande );
  }

  public getPanier(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/panier/getpanier', { headers: this.httpHeaders });
  }


}
