import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitEditorComponent } from './produit-editor/produit-editor.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';
import { PromotionEditorComponent } from './promotion-editor/promotion-editor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


import { httpInterceptorProviders } from './_helpers/http.interceptors';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ProduitEditorComponent,
    PromotionComponent,
    CategorieProduitComponent,
    PromotionEditorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
