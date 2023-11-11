import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';
import { ProduitEditorComponent } from './produit-editor/produit-editor.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionEditorComponent } from './promotion-editor/promotion-editor.component';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'addpromotion', component: PromotionEditorComponent },
  { path: 'categorie/:id', component: CategorieProduitComponent },
  { path: 'formulaire', component: ProduitEditorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
