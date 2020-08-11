import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../stovkservice/company.service';
import { Company } from '../../model/company';
import { combineAll, findIndex } from 'rxjs/operators';
import { componentFactoryName } from '@angular/compiler';
import { HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { AdminserviceService } from 'src/app/stovkservice/adminservice.service';
@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
  
})
export class AdminlandingComponent implements OnInit {
 

  data: boolean= false;
  company: boolean= false;
  exchange: boolean= false;
  ipo: boolean= false;
  new: boolean= false;
  com1: Company ={

    comp_name: '' ,
    turnover: '',
    ceo: '',
    board_of_directors:'',
    stock_exchange: '',
    sector:'',
    about: '',
    stockcode:0
  };
  com: Company[];
  stockcode:number;
  current: Company;
  comp_name: String ;
  turnover:string;
  ceo: String ;
  board_of_directors: String  ;
  stock_exchange: String ;
  sector: String ;
  about: String ;
  edit: boolean= false;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  error : boolean = false;
  sucess : boolean = false;


  constructor(private data1: CompanyService,private admin:AdminserviceService) { }

  ngOnInit(){
    this.data1.getcompany().subscribe(com=>{this.com=com});
  }
  importData(){
    this.data = true;
    this.company = false;
    this.exchange = false;
    this.new=false;
    this.ipo = false;
  }
  manageCompany(){
    this.data = false;
    this.company = true;
    this.exchange = false;
    this.ipo = false;
    this.new=false;
  }
  manageExchange(){
    this.data = false;
    this.company = false;
    this.exchange = true;
    this.ipo = false;
    this.new=false;
    
  }
  updateIpoDetails(){
    this.data = false;
    this.company = false;
    this.exchange = false;
    this.ipo = true;
    this.new=false;
  }
  createcompany(){

    this.data = false;
    this.company = false;
    this.exchange = false;
    this.ipo = false;
    this.new=true;
    
   
    
  }
  addCompany()
  {
    let res1=this.data1.addCompany(this.stockcode,this.comp_name, this.turnover, this.ceo, this.board_of_directors, this.stock_exchange, this.sector, this.about);
    res1.subscribe(data1=>console.log("success",data1));
  }
  
  editcompany(comp2:Company){
    this.edit=true;
    this.com1=comp2;
    this.createcompany();
  }

  deletecompany(comp2:Company){
    //this.com.splice(this.com.findIndex(comp2),1);
    let res1=this.data1.deletecompany(comp2);
      res1.subscribe(data1=>console.log("success",data1));
  }
  change($event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.data1.pushFile(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
         alert('File Successfully Uploaded');
         this.sucess = true;
      }
      else if (event instanceof HttpErrorResponse){
        this.error=true;}
      this.selectedFiles = undefined;
     }
    );
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.error=false;
    this.sucess=false;
  }

}

