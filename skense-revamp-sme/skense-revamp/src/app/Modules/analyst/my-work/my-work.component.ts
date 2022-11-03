import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from "@angular/core";
@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  @ViewChild("myCanvas") private myCanvas: ElementRef = {} as ElementRef;
  image = new Image();
 
   // dtOptions: DataTables.Settings = {};
   displayList:boolean = true;
   displayInvoice:boolean = false;
   sknList: Array<any> =[
     {
       "documentId": 123456702,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"Rejected"
     },
     {
       "documentId": 123456703,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"Completed"
     },
     {
       "documentId": 123456701,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"Failed"
     },
     {
       "documentId": 123456704,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"In Queue"
     },
     {
       "documentId": 123456705,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"Pending QC"
     },
     {
       "documentId": 123456706,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       "status":"In Progress"
     },
     {
       "documentId": 123456707,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456708,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456709,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456710,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456711,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456712,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456713,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     },
     {
       "documentId": 123456714,
       "documentName": "Contract_Name_PDF",
       "assignee": "Name Surname",
       "documentType": "Invoice",
       "createdOn": "15 Jan 00:00",
       "assignedOn": "15 Jan 00:00",
       "lastUpdatedOn": "15 Jan 00:00",
       
     }
   ]
   docId:any;
 
   constructor() { }
 
   ngOnInit(): void {
     this.displayList = true;
     localStorage.removeItem('displayList')
     localStorage.removeItem('documentId')
     
   }
 
   
   ngAfterViewInit(){
     this.image.src = "https://picsum.photos/200/300";
 
     let ctx: CanvasRenderingContext2D =
       this.myCanvas.nativeElement.getContext('2d');
     
     // showing
 
     ctx.fillRect(20, 20, 150, 100);
 
   // Not showing
     this.image.onload = () => {
     console.log("image has loaded!");
     ctx.drawImage(this.image, 100, 100);
   }
   }
   displayCanvas(data:any){
     this.docId = data.documentId;
     console.log("data", data);   
     if (data.status == "Rejected") {
      this.displayInvoice = true;
      this.displayList = false;
     } else{
      this.displayList = false;
     }
     localStorage.setItem("displayList", JSON.stringify(this.displayList))
     localStorage.setItem("documentId", this.docId)
   }

}
