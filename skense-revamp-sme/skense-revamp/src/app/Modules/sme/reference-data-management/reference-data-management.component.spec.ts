import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDataManagementComponent } from './reference-data-management.component';

describe('ReferenceDataManagementComponent', () => {
  let component: ReferenceDataManagementComponent;
  let fixture: ComponentFixture<ReferenceDataManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceDataManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
