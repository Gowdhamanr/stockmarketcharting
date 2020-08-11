import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';

import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { UpdataipoComponent}  from './component/updataipo/Updataipo.component';
import { ManageexchangeComponent}  from './component/manageexchange/manageexchange.component';
import { ManagecompanyComponent}  from './component/managecompany/managecompany.component';
import { ImportdataComponent}  from './component/importdata/importdata.component';
import { AdminlandingComponent}  from './component/adminlanding/adminlanding.component';
import { AuthGuard} from './auth.guard';
const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'admin',component:AdminComponent},
   {path:'user',component:UserComponent},
   {path:'login',component:LoginComponent},
   {path:'adminlanding',canActivate:[AuthGuard],component:AdminlandingComponent},
   {path:'updateipo',component:UpdataipoComponent},
   {path:'importdata',component:ImportdataComponent},
   {path:'managecompany',component:ManagecompanyComponent},
   {path:'manageexchange',component:ManageexchangeComponent}
];

@NgModule({
  exports:[RouterModule],

  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
