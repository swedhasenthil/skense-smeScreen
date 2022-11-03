import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateDocumentsReviewComponent } from './calibrate-documents-review.component';

describe('CalibrateDocumentsReviewComponent', () => {
  let component: CalibrateDocumentsReviewComponent;
  let fixture: ComponentFixture<CalibrateDocumentsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrateDocumentsReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrateDocumentsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
