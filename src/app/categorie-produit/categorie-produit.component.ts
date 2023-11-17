import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.css']
})
export class CategorieProduitComponent implements OnInit {

  produitsList: Produit[] = [];

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produitService.getProduitsByCategorie(id)
      .subscribe(produitsList => this.produitsList = produitsList)
  }

}
