import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserloginService } from './stovkservice/userlogin.service';
import { CompanyService } from './stovkservice/company.service';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule} from '@angular/forms';
import { UserComponent}  from './component/user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { UpdataipoComponent}  from './component/updataipo/Updataipo.component';
import { ManageexchangeComponent}  from './component/manageexchange/manageexchange.component';
import { ManagecompanyComponent}  from './component/managecompany/managecompany.component';
import { ImportdataComponent}  from './component/importdata/importdata.component';
import { AdminlandingComponent}  from './component/adminlanding/adminlanding.component';
import { RoutingModule } from './routing.module';
import { AuthGuard} from './auth.guard';
import { AdminserviceService } from './stovkservice/adminservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    UpdataipoComponent,
    AdminlandingComponent,
    ImportdataComponent,
    ManageexchangeComponent,
    ManagecompanyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [UserloginService,CompanyService,AdminserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
