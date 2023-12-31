import { Injectable } from '@angular/core';
import { Produit, ProduitModel, PromotionModel } from './produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  private allProduitsUrl = environment.apiUrl + "api/test/produit/";
  private addProduitUrl = environment.apiUrl + "api/test/produit/";
  private produitsOnSaleUrl = environment.apiUrl + "api/test/promotion/today/"
  private categorieProduitsUrlWithId = environment.apiUrl + "api/test/produit/categorie/";
  private addPromotionUrl = environment.apiUrl + "api/test/promotion/";


  /**Get produits from the server */
  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.allProduitsUrl)
  }

  getProduitsByCategorie(id: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.categorieProduitsUrlWithId + id)
  }

  addProduit2(produit: ProduitModel): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(produit);
    return this.http.post<any>(this.addProduitUrl, body, { 'headers': headers });
  }

  getProduitsEnPromoToday(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitsOnSaleUrl)
  }

  addPromotionWithProduitId(id: number, promotion: PromotionModel): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(promotion);
    return this.http.post<any>(this.addPromotionUrl + id, body, { 'headers': headers });
  }


}
