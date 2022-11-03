import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  displayList:any;
  documentId:any;
  routePath: any;
  constructor(public router: Router,) { this.routePath = router.url;}

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.displayList = localStorage.getItem('displayList');
    this.documentId = localStorage.getItem('documentId');
   
  }

}
