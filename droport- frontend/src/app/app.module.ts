import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './view/login/login.component';
import { AdminMainPanelComponent } from './view/admin/admin-main-panel/admin-main-panel.component';
import { AdminReqViewComponent } from './view/admin/admin-req-view/admin-req-view.component';
import { AdminRegPilotsComponent } from './view/admin/admin-reg-pilots/admin-reg-pilots.component';
import { AdminRegPhiComponent } from './view/admin/admin-reg-phi/admin-reg-phi.component';
import { AdminRegOwnersComponent } from './view/admin/admin-reg-owners/admin-reg-owners.component';
import { AdminRegReqComponent } from './view/admin/admin-reg-req/admin-reg-req.component';
import { CusNewReqComponent } from './view/customer/cus-new-req/cus-new-req.component';
import { CusReqHistoryComponent } from './view/customer/cus-req-history/cus-req-history.component';
import { CusReqViewComponent } from './view/customer/cus-req-view/cus-req-view.component';
import { OwnMainPageComponent } from './view/owner/own-main-page/own-main-page.component';
import { PilMainPageComponent } from './view/pilot/pil-main-page/pil-main-page.component';
import { OwnRegComponent } from './view/owner/own-reg/own-reg.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin_main_panel', component: AdminMainPanelComponent },
  { path: 'admin_reg_owners', component: AdminRegOwnersComponent },
  { path: 'admin_reg_phi', component: AdminRegPhiComponent },
  { path: 'admin_reg_pilots', component: AdminRegPilotsComponent },
  { path: 'admin_req_view', component: AdminReqViewComponent },
  { path: 'admin_reg_req', component: AdminReqViewComponent },
  { path: 'cus_new_req', component: CusNewReqComponent },
  { path: 'cus_req_history', component: CusReqHistoryComponent },
  { path: 'cus_req_view', component: CusReqViewComponent },
  { path: 'pli_main_page', component: PilMainPageComponent },
  { path: 'own_main_page', component: OwnMainPageComponent },
  { path: 'own_reg', component:OwnRegComponent}
 

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    AdminMainPanelComponent,
    AdminReqViewComponent,
    AdminRegPilotsComponent,
    AdminRegPhiComponent,
    AdminRegOwnersComponent,
    AdminRegReqComponent,
    CusNewReqComponent,
    CusReqHistoryComponent,
    CusReqViewComponent,
    OwnMainPageComponent,
    PilMainPageComponent,
    OwnRegComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
