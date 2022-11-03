import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveApisComponent } from './cognitive-apis.component';

describe('CognitiveApisComponent', () => {
  let component: CognitiveApisComponent;
  let fixture: ComponentFixture<CognitiveApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitiveApisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitiveApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
