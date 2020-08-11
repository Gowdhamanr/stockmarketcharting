import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private login;
  private username;

  constructor() {
    this.login=false;
   }
    public setlogin()
   {
     return this.login=true;
   }
   public getlogin()
   {
     return this.login;
   }
}
