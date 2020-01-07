import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   // baseurl = 'http://localhost:8080';
  // baseurl = 'http://localhost:8080';
    baseurl =  'https://api-mouride-style-authentique.herokuapp.com'; 
 
   httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
 
   // httpHeaders = new HttpHeaders({'Content-Type': 'application/json'  });
 

  constructor(private http: HttpClient) { }
// for inscription
  public signUp(user): Observable<any> {
    console.log(user);
    return this.http.post(this.baseurl + '/api/client/register', user);
  }

  // for connexion
  public signIn(user): Observable<any> {
    console.log(user);
    return this.http.post(this.baseurl + '/api/client/login/', user);
  }
  public finaliserCommande(commande): Observable<any> {
    console.log("la commande à finaliser",commande);
    return this.http.post(this.baseurl + '/api/commande/saveCommande', commande);
  }
  public facebookLogin(): Observable<any> {
    //console.log("la commande à finaliser",commande);
    return this.http.post(this.baseurl + '/api/client/facebook','');
  }



  public getAllClient(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/api/client/getuser/', { headers: this.httpHeaders });
  }

  public  getCommandeUser(id): Observable<any> {
    console.log(id);
    return this.http.get(this.baseurl + '/api/commande/commandebyuser/' + id + '/', { headers: this.httpHeaders });
  }

  public  getUserById(id): Observable<any> {
    console.log(id);
    return this.http.get(this.baseurl + '/api/client/getuserbyid/' + id + '/', { headers: this.httpHeaders });
  }

 
}
