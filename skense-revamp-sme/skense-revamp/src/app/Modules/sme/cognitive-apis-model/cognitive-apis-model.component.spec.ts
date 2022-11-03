import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveApisModelComponent } from './cognitive-apis-model.component';

describe('CognitiveApisModelComponent', () => {
  let component: CognitiveApisModelComponent;
  let fixture: ComponentFixture<CognitiveApisModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitiveApisModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitiveApisModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
