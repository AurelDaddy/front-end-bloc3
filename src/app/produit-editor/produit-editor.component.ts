import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ProduitService } from '../produit.service';
import  { Categorie, ProduitModel } from '../produit';

@Component({
  selector: 'app-produit-editor',
  templateUrl: './produit-editor.component.html',
  styleUrls: ['./produit-editor.component.css']
})
export class ProduitEditorComponent {
  produitForm = new FormGroup({
    libelle: new FormControl('', { nonNullable: true }),
    prix: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    categorie: new FormGroup({
      libelle: new FormControl('', { nonNullable: true }),
      /*libelle2: new FormControl('', { nonNullable: true})*/
    }),
  });

  /*categorieForm = new FormGroup({
    
  });*/

  constructor(public produitService: ProduitService) {}

  produit: ProduitModel = {
    libelle: '',
    description: '',
    prix: 0,
    categorie: {
      libelle: ''
    }
  };

  /* TEST AJOUT */

  selectedCategorie: string='';
  categories = ['Epicerie','Meubles'];


  
/* */


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.produitForm.value);
    console.warn(this.produitForm.getRawValue());

    this.produit.prix=Number(this.produitForm.value.prix);
    this.produit.libelle=this.produitForm.value.libelle;
    this.produit.description=this.produitForm.value.description;
    this.produit.categorie.libelle=this.produitForm.value.categorie?.libelle;

    this.produitService.addProduit2(this.produit).subscribe((response: any) => {
      console.log(response);
    });
  }

}
