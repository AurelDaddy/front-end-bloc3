export interface Produit {
    id: number;
    libelle: string;
    description: string;
    prix: string;
    promotion: boolean;
    categorie: Categorie;
}

export interface Categorie{
    /*id: number;*/
    libelle?: string;
}

export interface ProduitModel{
    libelle?: string;
    description?: string;
    prix?: number;
    categorie: Categorie;
}

export interface PromotionModel{
    datePromotion?: string;
    taux?: number;
    produit: ProduitModel;
}