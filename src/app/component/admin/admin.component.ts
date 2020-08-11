import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminlandingComponent } from '../adminlanding/adminlanding.component';
import { AdminserviceService } from 'src/app/stovkservice/adminservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private admin:AdminserviceService) { }

  ngOnInit(): void {

  }
  login(e)
  {

    e.preventDefault();
    console.log(e);
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    if(username=='socgenuser' && password=='socgen')
    {
       this.admin.setlogin();
       this.router.navigate(['adminlanding']);
    }
  }
}
