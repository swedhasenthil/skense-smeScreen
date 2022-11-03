import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';


// import {AccordionModule} from 'primeng/accordion';      
 //import {CalendarModule} from 'primeng/calendar';
// import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTablesModule,
   // CalendarModule
  ],
  exports:[
    CommonModule,
    DataTablesModule,
   // CalendarModule
  ]
})
export class SharedModule { }
