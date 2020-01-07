import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  listcategories;

  constructor(private categorieservice:CategorieService,private router:Router) { }

  ngOnInit() {
    this.afficherCategorie()
  }


  afficherCategorie(){
    this.categorieservice.readCategorie().subscribe(data => {
      this.listcategories = data;
      // console.log(this.listcategories);
      // this.listsouscategorie = this.listcategories[0].typeCategories
      console.log(this.listcategories)

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
