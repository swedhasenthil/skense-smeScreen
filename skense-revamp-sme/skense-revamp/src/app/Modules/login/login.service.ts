import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions: any;
  constructor(private httpClient:HttpClient) {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Access-Control-Allow-Origin': '*'
  //     }),
  //     withCredentials: true
  //   };
    }
 
  login(payload:any){
    return this.httpClient.post(environment.baseUrl + '/users/authenticate/v1',payload);
  }

  saveNewUser(payload:any){
   return this.httpClient.post('http://localhost:3000/signup',payload)
  }

  changePassword(payload:any){
    return this.httpClient.put(`http://localhost:3000/signup/${payload.id}`,payload)
  
  }

  getUserById(id:any){
    return this.httpClient.get(`http://localhost:3000/signup/${id}`)
  }
}
