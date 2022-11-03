import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureProjectsWorkflowComponent } from './configure-projects-workflow.component';

describe('ConfigureProjectsWorkflowComponent', () => {
  let component: ConfigureProjectsWorkflowComponent;
  let fixture: ComponentFixture<ConfigureProjectsWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureProjectsWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureProjectsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
