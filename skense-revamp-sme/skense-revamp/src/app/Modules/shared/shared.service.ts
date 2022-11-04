import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public httpClient : HttpClient) { }

getNotifications(userId :any){
  return this.httpClient.get(environment.baseUrl +'/users/'+ userId +'/notifications');
}
deleteAllNotificationsOfAUser(userId:any,dateTime:any){
  return this.httpClient.delete(
    environment.baseUrl + `/notifications?user_id=${userId}&latestnotificationdatetime=${dateTime}`
  );
}
deleteNotification(notificationId:any) {
  return this.httpClient.delete(
    environment.baseUrl + `/notifications/${notificationId}`
  );
}
getCurrentUserRoles(body:any) {
  return this.httpClient.post(
    environment.baseUrl+ `/users/roles/v1`,
    body
  );
}
}