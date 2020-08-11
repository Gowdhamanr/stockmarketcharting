import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../../stovkservice/userlogin.service';
import { Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:number
  username: string
  password:string
  email: string
  mobile_number: number
   
  constructor(private router:Router,private data:UserloginService,private http: HttpClient) { 
  }

  ngOnInit(): void {
  }
  addNewUser(){
    
    let res=this.data.addUser(this.id,this.username, this.password, this.email, this.mobile_number);
    res.subscribe(data=>console.log("success",data));

}

}
