import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionEditorComponent } from './promotion-editor.component';

describe('PromotionEditorComponent', () => {
  let component: PromotionEditorComponent;
  let fixture: ComponentFixture<PromotionEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionEditorComponent]
    });
    fixture = TestBed.createComponent(PromotionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
