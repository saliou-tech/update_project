import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ViewProductComponent } from './view-product/view-product.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AritcleComponent } from './admin/aritcle/aritcle.component';
import { LivraisonComponent } from './admin/livraison/livraison.component';
import { CommandeAdminComponent } from './admin/commande-admin/commande-admin.component';
import { ArticleByCategoryComponent } from './article-by-category/article-by-category.component';
import { ArticleBySouscategorieComponent } from './article-by-souscategorie/article-by-souscategorie.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierCommandeComponent } from './panier-commande/panier-commande.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { ClientCommandeComponent } from './admin/client-commande/client-commande.component';
import { PaiementComponent } from './paiement/paiement.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'client', component: ClientComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'addarticles', component: AritcleComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'commande-admin', component: CommandeAdminComponent },
  { path: 'articlebycategorie/:categorie', component:ArticleByCategoryComponent },
  { path: 'articleType/:idtypCat', component:ArticleBySouscategorieComponent},
  { path: 'panier', component:PanierComponent},
  { path: 'loginUser', component:UserLoginComponent},
  { path: 'inscription', component:ConnexionComponent},
  { path: 'resumepanier', component:PanierCommandeComponent},
  { path: 'admin-client', component:UtilisateurComponent},
  { path: 'admin-client-commande', component:ClientCommandeComponent},
  { path: 'paiement', component:PaiementComponent}





  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
