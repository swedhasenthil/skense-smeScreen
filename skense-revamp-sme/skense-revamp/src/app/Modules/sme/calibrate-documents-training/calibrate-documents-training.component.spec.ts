import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateDocumentsTrainingComponent } from './calibrate-documents-training.component';

describe('CalibrateDocumentsTrainingComponent', () => {
  let component: CalibrateDocumentsTrainingComponent;
  let fixture: ComponentFixture<CalibrateDocumentsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrateDocumentsTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrateDocumentsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
