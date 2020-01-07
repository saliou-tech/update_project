import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listcategories;
  listsouscategorie;
  newUser = true
  
  isNameUserExist;
  monpanier;
  client={
    data:{
      currentUser:{
        id:'',
        username:'',
        nom:''
      }
    },
    nom:''
  }
  client_string;


  constructor(private categorieservice:CategorieService,private router:Router) { }

  ngOnInit() {
    //le panier

    this.monpanier= localStorage.getItem('panier' );
    this.monpanier = JSON.parse( this.monpanier)
    console.log( "le  panier",this.monpanier)
    this.afficherCategorie();
    this.client_string = localStorage.getItem('user')
    this.client = JSON.parse(this.client_string)
    console.log("le client",this.client)
    if(this.client.nom){
      this.isNameUserExist=true;

    }

  }

  afficherCategorie(){
    this.categorieservice.readCategorie().subscribe(data => {
      this.listcategories = data;
      // console.log(this.listcategories);
      this.listsouscategorie = this.listcategories[0].typeCategories
      console.log(this.listsouscategorie)

  },
  error => {
    console.log('error', error);
  })

  }
  getCategorie(categorie){
    console.log(categorie)
    localStorage.setItem('categorie' , categorie );
    this.router.navigate(['articlebycategorie' , categorie]);
    // this.router.navigateByUrl('/articlebycategorie/categorie',{skipLocationChange: true}).then(()=>
    // this.router.navigate(["articlebycategorie",categorie])); 
    
  }
  getSousCategorie(souscategorie){
    console.log(souscategorie)
    localStorage.setItem('souscategorie' , souscategorie.id );
    this.router.navigate(['articleType' , souscategorie.id]);
    // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
    // this.router.navigate(["articleType"])); 

  }

}
