import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { SmeComponent } from './sme.component';
import { SmeLandingComponent } from './sme-landing/sme-landing.component';
import { CalibrateDocumentsTrainingComponent } from './calibrate-documents-training/calibrate-documents-training.component';
import { CalibrateDocumentsReviewComponent } from './calibrate-documents-review/calibrate-documents-review.component';
import { CalibrateDocumentsGoldenComponent } from './calibrate-documents-golden/calibrate-documents-golden.component';
import { CalibrateDocumentsComponent } from './calibrate-documents/calibrate-documents.component';
import { CognitiveApisComponent } from './cognitive-apis/cognitive-apis.component';
import { CognitiveApisModelComponent } from './cognitive-apis-model/cognitive-apis-model.component';
import { ConfigureProjectsComponent } from './configure-projects/configure-projects.component';
import { ConfigureProjectsWorkflowComponent } from './configure-projects-workflow/configure-projects-workflow.component';
import { ReferenceDataManagementComponent } from './reference-data-management/reference-data-management.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    SmeComponent,
    SmeLandingComponent,
    CalibrateDocumentsTrainingComponent,
    CalibrateDocumentsReviewComponent,
    CalibrateDocumentsGoldenComponent,
    CalibrateDocumentsComponent,
    CognitiveApisComponent,
    CognitiveApisModelComponent,
    ConfigureProjectsComponent,
    ConfigureProjectsWorkflowComponent,
    ReferenceDataManagementComponent,
  
  ],
  imports: [
    CommonModule,
    SmeRoutingModule,
    DataTablesModule,
    // SharedModule
  ]
})
export class SmeModule { }
