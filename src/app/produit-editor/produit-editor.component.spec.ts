import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitEditorComponent } from './produit-editor.component';

describe('ProduitEditorComponent', () => {
  let component: ProduitEditorComponent;
  let fixture: ComponentFixture<ProduitEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitEditorComponent]
    });
    fixture = TestBed.createComponent(ProduitEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
