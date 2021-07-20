import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './company/mission/mission.component';
import { AboutComponent } from './company/about/about.component';
import { CeoComponent } from './company/ceo/ceo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CareerComponent } from './career/career.component';
import { AndroidComponent } from './mobileapp/android/android.component';
import { IosComponent } from './mobileapp/ios/ios.component';
import { IotComponent } from './mobileapp/iot/iot.component';
import { AppsupportComponent } from './mobileapp/appsupport/appsupport.component';
import { AppoverviewComponent } from './mobileapp/appoverview/appoverview.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ClientsComponent } from './clients/clients.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './web-development/angular/angular.component';
import { ReactJsComponent } from './web-development/react-js/react-js.component';
import { NodeJsComponent } from './web-development/node-js/node-js.component';
import { ReactNativeComponent } from './web-development/react-native/react-native.component';
import { FrontendComponent } from './web-development/frontend/frontend.component';
import { BackendComponent } from './web-development/backend/backend.component';
import { DesignComponent } from './design/design.component';
import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { FlutterappComponent } from './mobileapp/flutterapp/flutterapp.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { BuynowComponent } from './buynow/buynow.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ceo', component: CeoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'career', component: CareerComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'ios', component: IosComponent },
   { path: 'iot', component: IotComponent },
   { path: 'appsupport', component: AppsupportComponent },
   { path: 'appoverview', component: AppoverviewComponent },
   { path: 'it-consulting', component: ItConsultingComponent },
   { path: 'mobileapp', component: MobileappComponent },
   { path: 'digital-marketing', component: DigitalMarketingComponent },
   { path: 'clients', component: ClientsComponent },
   { path: 'faq', component: FaqComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'angular', component: AngularComponent },
   { path: 'react-js', component: ReactJsComponent },
   { path: 'node-js', component: NodeJsComponent },
   { path: 'react-native', component: ReactNativeComponent },
   { path: 'frontend', component: FrontendComponent },
   { path: 'backend', component: BackendComponent },
   { path: 'design', component: DesignComponent },
   { path: 'dialog-elements-example-dialog', component: DialogElementsExampleDialogComponent },
   { path: 'flutterapp', component: FlutterappComponent },
   { path: 'ecommerce', component: EcommerceComponent },
   { path: 'buynow', component: BuynowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
