import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  produitsList: Produit[] = [];

  constructor(private produitService: ProduitService ) { }

  ngOnInit(): void {
    this.getProduitsEnPromoToday();
  }

  getProduitsEnPromoToday(): void {
    this.produitService.getProduitsEnPromoToday()
      .subscribe(produitsList => this.produitsList = produitsList)
  }

}
