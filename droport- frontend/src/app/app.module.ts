import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
<<<<<<< HEAD
import { HttpClientModule} from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
=======
import { HttpModule} from '@angular/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 261ca588b7e35e33dd4cc6827be14fd1045b80ff

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './view/login/login.component';
import { AdminMainPanelComponent } from './view/admin/admin-main-panel/admin-main-panel.component';
import { AdminReqViewComponent } from './view/admin/admin-req-view/admin-req-view.component';
import { AdminRegPilotsComponent } from './view/admin/admin-reg-pilots/admin-reg-pilots.component';
import { AdminRegOwnersComponent } from './view/admin/admin-reg-owners/admin-reg-owners.component';
import { AdminRegReqComponent } from './view/admin/admin-reg-req/admin-reg-req.component';
import { CusNewReqComponent } from './view/customer/cus-new-req/cus-new-req.component';
import { CusReqHistoryComponent } from './view/customer/cus-req-history/cus-req-history.component';
import { CusReqViewComponent } from './view/customer/cus-req-view/cus-req-view.component';
import { OwnMainPageComponent } from './view/owner/own-main-page/own-main-page.component';
import { PilMainPageComponent } from './view/pilot/pil-main-page/pil-main-page.component';
import { OwnRegComponent } from './view/owner/own-reg/own-reg.component';
import { SidebarPilotComponent } from './components/sidebar-pilot/sidebar-pilot.component';
import { PilReqDetailComponent } from './view/pilot/pil-req-detail/pil-req-detail.component';
import { PilFlyHistoryComponent } from './view/pilot/pil-fly-history/pil-fly-history.component';
import { HomeComponent } from './view/landing/home/home.component';
import { AboutComponent } from './view/landing/about/about.component';
import { ServicesComponent } from './view/landing/services/services.component';
import { ContactusComponent } from './view/landing/contactus/contactus.component';
import { OwnProfComponent } from './view/owner/own-prof/own-prof.component';
import { DroneRegComponent } from './view/owner/drone-reg/drone-reg.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { AdminProfileComponent } from './view/admin/admin-profile/admin-profile.component';
<<<<<<< HEAD
import { AdminRegCustomersComponent } from './view/admin/admin-reg-customers/admin-reg-customers.component';
import { DroneRegComponent } from './view/owner/drone-reg/drone-reg.component';
import { CommonModule } from '@angular/common';


=======
import { PilFlyHistDetailComponent } from './view/pilot/pil-fly-hist-detail/pil-fly-hist-detail.component';
import { PilProfileComponent } from './view/pilot/pil-profile/pil-profile.component';
import { SidebarOwnerComponent } from './components/sidebar-owner/sidebar-owner.component';
import { OwnerHistComponent } from './view/owner/owner-hist/owner-hist.component';
import { OwnerReqComponent } from './view/owner/owner-req/owner-req.component';
<<<<<<< HEAD
import { SidebarCustomerComponent } from './components/sidebar-customer/sidebar-customer.component';
import { MapComponent } from './components/map/map.component';
=======
>>>>>>> 0c296f3cd24647bcc668d4085cf99c74ba0a26f6
>>>>>>> 261ca588b7e35e33dd4cc6827be14fd1045b80ff

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin_main_panel', component: AdminMainPanelComponent },
  { path: 'admin_reg_owners', component: AdminRegOwnersComponent },
  { path: 'admin_reg_pilots', component: AdminRegPilotsComponent },
  { path: 'admin_req_view', component: AdminReqViewComponent },
  { path: 'admin_reg_req', component: AdminRegReqComponent },
  { path: 'cus_new_req', component: CusNewReqComponent },
  { path: 'cus_req_history', component: CusReqHistoryComponent },
  { path: 'cus_req_view', component: CusReqViewComponent },
  { path: 'pil_main_page', component: PilMainPageComponent },
  { path: 'own_main_page', component: OwnMainPageComponent },
  { path: 'own_reg', component:OwnRegComponent},
  { path: 'req_detail', component: PilReqDetailComponent},
  { path: 'pil_fly_history', component: PilFlyHistoryComponent},
  { path: 'land_about', component: AboutComponent },
  { path: 'land_home', component: HomeComponent },
  { path: 'land_services', component: ServicesComponent },
  { path: 'land_contactus', component: ContactusComponent },

  { path: 'login', component: LoginComponent},


  { path: 'admin_profile',component: AdminProfileComponent},
<<<<<<< HEAD
  { path: 'drone_reg',component: DroneRegComponent},
  { path: 'admin_reg_customer', component:AdminRegCustomersComponent}

=======
  { path: 'pil_hist_detail',component:  PilFlyHistDetailComponent},
  { path: 'pil_profile',component:   PilProfileComponent},
  { path: 'own_prof',component:   OwnProfComponent},
  { path: 'owner_hist',component:   OwnerHistComponent},
  { path: 'owner_req',component:   OwnerReqComponent},
  { path: 'drone_reg',component:   DroneRegComponent},
<<<<<<< HEAD
  { path: 'map',component: MapComponent}

=======
>>>>>>> 0c296f3cd24647bcc668d4085cf99c74ba0a26f6
>>>>>>> 261ca588b7e35e33dd4cc6827be14fd1045b80ff

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
    AdminRegOwnersComponent,
    AdminRegReqComponent,
    CusNewReqComponent,
    CusReqHistoryComponent,
    CusReqViewComponent,
    OwnMainPageComponent,
    PilMainPageComponent,
    OwnRegComponent,
    SidebarPilotComponent,
    PilReqDetailComponent,
    PilFlyHistoryComponent,
    OwnProfComponent,
    DroneRegComponent,
    OwnerHistComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    FooterComponent,
    SidebarAdminComponent,
    AdminProfileComponent,
<<<<<<< HEAD
    AdminRegCustomersComponent,
    DroneRegComponent
=======
    PilFlyHistDetailComponent,
    PilProfileComponent,
    SidebarOwnerComponent,
    OwnerReqComponent,
    SidebarCustomerComponent,
    MapComponent,
   
>>>>>>> 0c296f3cd24647bcc668d4085cf99c74ba0a26f6
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYoouloKlGIUxiQswbLAB5rf96oLPuavc'
    })
=======
    HttpModule,
    FormsModule,
    CommonModule,
    
>>>>>>> 261ca588b7e35e33dd4cc6827be14fd1045b80ff
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
