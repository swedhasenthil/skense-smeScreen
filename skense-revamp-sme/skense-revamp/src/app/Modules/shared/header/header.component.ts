import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  routePath: any;
  displayList:any;
  documentId:any;
  userName:any;
  roleSme: any;
  constructor(public router: Router,) { this.routePath = router.url;}


  ngOnInit(): void {
    this.getUserName();
  }
  ngDoCheck(){
    this.displayList = localStorage.getItem('displayList');
    this.documentId = localStorage.getItem('documentId');
   
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  getUserName(){
    this.userName= localStorage.getItem('user_name')
  }
  smenavigate(){
    this.roleSme = "SME"
  }

}
