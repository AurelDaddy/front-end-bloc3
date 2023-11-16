import { Injectable } from '@angular/core';
import { Produit, ProduitModel, PromotionModel} from './produit';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor( private http: HttpClient) { }

  

  private allProduitsUrl = "https://back2-0-446dxhl2ua-ey.a.run.app/api/test/produit/";
  private addProduitUrl = "https://back2-0-446dxhl2ua-ey.a.run.app/api/test/produit/";
  private produitsOnSaleUrl = "https://back2-0-446dxhl2ua-ey.a.run.app/api/test/promotion/today/"
  private categorieProduitsUrlWithId = "https://back2-0-446dxhl2ua-ey.a.run.app/api/test/produit/categorie/";
  private addPromotionUrl = "https://back2-0-446dxhl2ua-ey.a.run.app/api/test/promotion/";

    /**Get produits from the server */
    getAllProduits(): Observable<Produit[]> {
      return this.http.get<Produit[]>(this.allProduitsUrl)
    }
  
    getProduitsByCategorie(id: number): Observable<Produit[]> {
      return this.http.get<Produit[]>(this.categorieProduitsUrlWithId + id)
    }
    
    addProduit2(produit: ProduitModel): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(produit);  
      return this.http.post<any>(this.addProduitUrl, body, {'headers': headers});
  }
  
    getProduitsEnPromoToday(): Observable<Produit[]> {
      return this.http.get<Produit[]>(this.produitsOnSaleUrl)
    }

    addPromotionWithProduitId(id: number, promotion: PromotionModel ): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(promotion);
      return this.http.post<any>(this.addPromotionUrl + id, body, {'headers': headers});
    }


}
