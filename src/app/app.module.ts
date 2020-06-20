import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TreemenuComponent } from './treemenu/treemenu.component';
import { CanvasdetailComponent } from './canvasdetail/canvasdetail.component';
import { CustomreportComponent } from './customreport/customreport.component';
import { MaindashboardComponent } from './analytic/maindashboard/maindashboard.component';
import { LanddetailreportComponent } from './analytic/landdetailreport/landdetailreport.component';
import { LandroutingreportComponent } from './analytic/landroutingreport/landroutingreport.component';
import { PreferenceComponent } from './administration/preference/preference.component';
import { CopyAccountComponent } from './administration/copy-account/copy-account.component';
import { AutoConversionComponent } from './administration/auto-conversion/auto-conversion.component';
import { TieBreakerComponent } from './administration/tie-breaker/tie-breaker.component';
import { UserAndAccessComponent } from './administration/user-and-access/user-and-access.component';
import { PartnerComponent } from './administration/partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    TreemenuComponent,
    CanvasdetailComponent,
    CustomreportComponent,
    MaindashboardComponent,
    LanddetailreportComponent,
    LandroutingreportComponent,
    PreferenceComponent,
    CopyAccountComponent,
    AutoConversionComponent,
    TieBreakerComponent,
    UserAndAccessComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
