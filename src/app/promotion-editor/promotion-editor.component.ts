import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit, ProduitModel, PromotionModel } from '../produit';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-promotion-editor',
  templateUrl: './promotion-editor.component.html',
  styleUrls: ['./promotion-editor.component.css']
})
export class PromotionEditorComponent implements OnInit {
  promotionForm = new FormGroup({
    idProduit: new FormControl('', { nonNullable: true }),
    datePromotion: new FormControl('', { nonNullable: true }),
    taux: new FormControl('', { nonNullable: true }),
  })

  constructor(public produitService: ProduitService) {}
  
  promotion: PromotionModel = {
    datePromotion: '',
    taux: 0,
    produit: {
      libelle: '',
      categorie: {}
    },
  };

  produitsList: Produit[] = [];

  produit: ProduitModel = {
    libelle: '',
    description: '',
    prix: 0,
    categorie: {
      libelle: ''
    }
  };


  ngOnInit(): void {
    this.produitService.getAllProduits()
      .subscribe(produitsList => this.produitsList = produitsList)
  }

  
  onSubmit() {

    console.warn(this.promotionForm.value);
    console.warn(this.promotionForm.getRawValue());

    const id= Number(this.promotionForm.value.idProduit);
    
    this.promotion.datePromotion=this.promotionForm.value.datePromotion;
    this.promotion.taux=Number(this.promotionForm.value.taux);

    this.produitService.addPromotionWithProduitId(id,this.promotion).subscribe((response: any) => {
      console.log(response);
    });
  }

}
