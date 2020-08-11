import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
const options= {
  headers: new HttpHeaders({'content-type': "application/json"})

}
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  url : string = "http://localhost:8085/demo/adduser"
  url1: string ="http://localhost:8085/demo/all1"
  constructor(private http: HttpClient) { }

  public addUser(id:number,username: string, password: string, email: string, mobile_number:number) {

    return this.http.post<any>(this.url,{"id":id,"username":username,"password":password,"email":email,"mobile_number":mobile_number},options);
    //subscribe(data => {console.log("success");},error => {console.log("error",error);});

}
public fetchdata()
{
  return this.http.get<any>(this.url1,options);
}
public checkadmin(credentials : any) {
  return this.http.post<any>("http://localhost:8085/demo/check",credentials, {responseType: 'text' as 'json'});
  //subscribe(data => {console.log("success");},error => {console.log("error",error);});

}
}
