import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from "./services/user.service";
import { RequestService } from "./services/request.service";
import { DroneService} from "./services/drone.service";
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
import { FooterComponent } from './components/footer/footer.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { AdminProfileComponent } from './view/admin/admin-profile/admin-profile.component';
import { AdminRegCustomersComponent } from './view/admin/admin-reg-customers/admin-reg-customers.component';
import { PilFlyHistDetailComponent } from './view/pilot/pil-fly-hist-detail/pil-fly-hist-detail.component';
import { PilProfileComponent } from './view/pilot/pil-profile/pil-profile.component';
import { SidebarOwnerComponent } from './components/sidebar-owner/sidebar-owner.component';
import { OwnerHistComponent } from './view/owner/owner-hist/owner-hist.component';
import { OwnerReqComponent } from './view/owner/owner-req/owner-req.component';
import { MyDronesComponent } from './view/owner/my-drones/my-drones.component';
import { OwnReqViewComponent } from "./view/owner/own-req-view/own-req-view.component" ;
import { SidebarCustomerComponent } from './components/sidebar-customer/sidebar-customer.component';
import { MapComponent } from './components/map/map.component';
import { DroneRegComponent } from './view/owner/drone-reg/drone-reg.component';
import { PilRegComponent } from './view/pilot/pil-reg/pil-reg.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { OwnDrnSelComponent } from './view/owner/own-drn-sel/own-drn-sel.component';
import { combineLatest } from 'rxjs';
import { OwnPilSelComponent } from './view/owner/own-pil-sel/own-pil-sel.component';
import { CusRegComponent } from './view/customer/cus-reg/cus-reg.component';
import { CusMainPageComponent } from './view/customer/cus-main-page/cus-main-page.component';
import { CusDrnSelectComponent } from './view/customer/cus-drn-select/cus-drn-select.component';


const appRoutes: Routes = [
  { path: '',component: HomeComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'admin_main_panel', component: AdminMainPanelComponent },
  { path: 'admin_reg_owners', component: AdminRegOwnersComponent },
  { path: 'admin_reg_pilots', component: AdminRegPilotsComponent },
  { path: 'admin_req_view/:req_id', component: AdminReqViewComponent },
  { path: 'admin_reg_req', component: AdminRegReqComponent },
  { path: 'admin_profile',component: AdminProfileComponent},
  { path: 'admin_reg_customer', component:AdminRegCustomersComponent},
  { path: 'login', component:LoginComponent },

  { path: 'cus_new_req', component: CusNewReqComponent },
  { path: 'cus_req_history', component: CusReqHistoryComponent },
  { path: 'cus_req_view', component: CusReqViewComponent },
  { path: 'cus_reg',component:CusRegComponent},
  { path: 'cus_drn_select', component:CusDrnSelectComponent},

  { path: 'pil_main_page', component: PilMainPageComponent },
  { path: 'pil_hist_detail',component:  PilFlyHistDetailComponent},
  { path: 'pil_profile',component:   PilProfileComponent},
  { path: 'pil_reg',component: PilRegComponent },
  { path: 'pil_fly_history', component: PilFlyHistoryComponent},
  { path: 'req_detail', component: PilReqDetailComponent},

  { path: 'own_prof',component:   OwnProfComponent},
  { path: 'owner_hist',component:   OwnerHistComponent},
  { path: 'owner_req_view/:id', component: OwnReqViewComponent  },
  { path: 'owner_req/:id',component:   OwnerReqComponent},
  { path: 'own_main_page', component: OwnMainPageComponent },
  { path: 'own_reg', component:OwnRegComponent},
  { path: 'own_drn_sel', component: OwnDrnSelComponent },
  { path: 'drone_reg',component:   DroneRegComponent},
  { path: 'my_drones',component:   MyDronesComponent},

  { path: 'land_about', component: AboutComponent },
  { path: 'land_home', component: HomeComponent },
  { path: 'land_services', component: ServicesComponent },
  { path: 'land_contactus', component: ContactusComponent },
  
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
    OwnerHistComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    FooterComponent,
    SidebarAdminComponent,
    AdminProfileComponent,
    AdminRegCustomersComponent,
    DroneRegComponent,
    PilFlyHistDetailComponent,
    PilProfileComponent,
    SidebarOwnerComponent,
    OwnerReqComponent,
    MyDronesComponent,
    SidebarCustomerComponent,
    MapComponent,
    PilRegComponent,
    AppHeaderComponent,
    OwnDrnSelComponent,
    OwnReqViewComponent,
    OwnPilSelComponent,
    CusRegComponent,
    CusMainPageComponent,
    CusDrnSelectComponent,
    
 
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYoouloKlGIUxiQswbLAB5rf96oLPuavc',
      libraries: ["places"]
    }),
    HttpModule,
    FormsModule,
    CommonModule,
    
    
    
  ],
  providers: [UserService,RequestService,DroneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
