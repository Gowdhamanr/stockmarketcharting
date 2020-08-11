import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {

   others:boolean=false;
   company:boolean=false;
   sector:boolean=false;
   ipos:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  ipo()
  {
    this.others=false;
    this.company=false;
    this.sector=false;
    this.ipos=true;
  }
  compareCompany()
  {
    this.others=false;
    this.company=true;
    this.sector=false;
    this.ipos=false;
  }
  comparesector()
  {
    this.others=false;
    this.company=false;
    this.sector=true;
    this.ipos=false;
  }
  other()
  {
    this.others=true;
    this.company=false;
    this.sector=false;
    this.ipos=false;
  }
}
