import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateDocumentsComponent } from './calibrate-documents.component';

describe('CalibrateDocumentsComponent', () => {
  let component: CalibrateDocumentsComponent;
  let fixture: ComponentFixture<CalibrateDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrateDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrateDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
