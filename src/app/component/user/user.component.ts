import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../../stovkservice/userlogin.service';
import { Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  msg: String = "";
  credentials = {email: '', password: ''};
  constructor(private router:Router,private data: UserloginService,private http: HttpClient) { 
  }

  ngOnInit(): void {
  }
  go(){
    this.data.checkadmin(this.credentials).subscribe(data=>{
      if(data=="sucess"){
        this.router.navigateByUrl('/manageexchange');
      }else{
        this.msg="Enter valid username and password"
      }
    });
}


}
