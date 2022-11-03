import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateDocumentsGoldenComponent } from './calibrate-documents-golden.component';

describe('CalibrateDocumentsGoldenComponent', () => {
  let component: CalibrateDocumentsGoldenComponent;
  let fixture: ComponentFixture<CalibrateDocumentsGoldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrateDocumentsGoldenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrateDocumentsGoldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
