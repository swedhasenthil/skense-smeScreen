import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

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
  userId: any;
  showMore:any;
  notificationMessages:any[];
  constructor(public router: Router,
    public sharedService: SharedService) { this.routePath = router.url;}


  ngOnInit(): void {
    this.getUserName();
    this.userId= localStorage.getItem('user_id')
    console.log(this.userId)
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
  getAllNotificationsOfUser(markAsRead?:boolean){
    this.sharedService.getNotifications(this.userId).subscribe((res :any)=>{
      this.notificationMessages = res.notifications;
      console.log("notification of list",this.notificationMessages)
    })
  }
  getAllUserRoles(){
  this.sharedService.getCurrentUserRoles({ user_id: this.userId })
  .subscribe(
    (data:any) => {
      console.log(data)
})
  }
  logout(){
    
  }
  }