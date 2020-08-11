import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders,HttpEvent} from '@angular/common/http';
import { Company } from '../model/company';
const options= {
  headers: new HttpHeaders({'content-type': "application/json"})

}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url : string = "http://localhost:8085/demo/addcompany"
  url1: string ="http://localhost:8085/demo/company"

  constructor(private http: HttpClient) { }

  
  public addCompany(stockcode:number, comp_name: String, turnover:string ,ceo:String , board_of_directors: String , stock_exchange: String,sector: String ,about: String ) {

    return this.http.post<any>(this.url,{"stockcode":stockcode,"comp_name":comp_name,"turnover":turnover, "ceo":ceo, "board_of_directors":board_of_directors,
    
  "stock_exchange":stock_exchange, "sector":sector, "about":about,},options);

}
public pushFile(file: File){
  const data: FormData = new FormData();
  data.append('file', file);
  return this.http.post<HttpEvent<{}>>("http://localhost:8085/demo/file",data,{
    reportProgress: true,
    responseType: 'text' as 'json'
    })
}
public editcompany(com1: Company){
  return this.http.put<Company[]>("http://localhost:8085/demo/updatecom",com1)
}

public deletecompany(com1: Company){
  return this.http.delete<Company[]>("http://localhost:8085/demo/deletecom"+com1.stockcode)
}
getcompany(){
  return this.http.get<Company[]>(this.url1);
}

}