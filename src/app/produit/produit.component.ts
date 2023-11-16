import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produitsList: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits(): void {
    this.produitService.getAllProduits()
      .subscribe(produitsList => this.produitsList = produitsList)
  }


}
