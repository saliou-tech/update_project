import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule  } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
//import {StorageModule} from '@cedx/ngx-webstorage';

// import { FontAwesomeModule } from 'angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

import { UserLoginComponent } from './user-login/user-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { MenuLeftAdminComponent } from './admin/menu-left-admin/menu-left-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AritcleComponent } from './admin/aritcle/aritcle.component';
import { LivraisonComponent } from './admin/livraison/livraison.component';
import { CommandeAdminComponent } from './admin/commande-admin/commande-admin.component';
import { ArticleService } from './service/article.service';
import {MatCardModule} from '@angular/material/card';

//import {MatIconModule} from '@angular/material/icon';
// import { CategoryComponent } from './category/category.component';
import { ArticleByCategoryComponent } from './article-by-category/article-by-category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleBySouscategorieComponent } from './article-by-souscategorie/article-by-souscategorie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ViewProductOnPanierComponent } from './view-product-on-panier/view-product-on-panier.component';
import { UserService } from './service/user.service';
// import { NgxLocalStorageModule } from 'ngx-localstorage';
import { PanierService } from './service/panier.service';
import { PanierCommandeComponent } from './panier-commande/panier-commande.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { CommandeService } from './service/commande.service';
import { FactureclientComponent } from './factureclient/factureclient.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { ClientCommandeComponent } from './admin/client-commande/client-commande.component';
import { PaiementComponent } from './paiement/paiement.component';

//import {MatButtonModule} from '@angular/material/button';

//import * as bcrypt from 'bcrypt';
@NgModule({
  //imports:[MatDialog],
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    FooterComponent,
    ViewProductComponent,
    PanierComponent,
    ClientComponent,
    CommandeComponent,
    MenuAdminComponent,
    MenuLeftAdminComponent,
    LoginComponent,
    CategoriesComponent,
    AritcleComponent,
    LivraisonComponent,
    CommandeAdminComponent,
    
    ArticleByCategoryComponent,
    
    SidebarComponent,
    
    ArticleBySouscategorieComponent,
    UserLoginComponent,
    ConnexionComponent,
    ViewProductOnPanierComponent,
    PanierCommandeComponent,
    FactureclientComponent,
    UtilisateurComponent,
    ClientCommandeComponent,
    PaiementComponent,

 
    
    // MatDialog, 
    // MatDialogRef
  ],
  // exports: [
  //   MatDialog, 
  //   MatDialogRef
  
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    // FontAwesomeModule,
    FormsModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    PDFExportModule,
    // NgxLocalStorageModule.forRoot(),
    
    
    

  //  BrowserAnimationsModule,
  
    
  ],
  entryComponents: [
    ViewProductComponent, ConnexionComponent
  ],
  providers: [ArticleService,CategoriesComponent,UserService,PanierService,CommandeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
