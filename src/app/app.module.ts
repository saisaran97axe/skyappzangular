import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { AboutComponent } from './company/about/about.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagefooterComponent } from './pagefooter/pagefooter.component';
import { MissionComponent } from './company/mission/mission.component';
import { CeoComponent } from './company/ceo/ceo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CareerComponent } from './career/career.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { AndroidComponent } from './mobileapp/android/android.component';
import { IosComponent } from './mobileapp/ios/ios.component';
import { IotComponent } from './mobileapp/iot/iot.component';
import { AppsupportComponent } from './mobileapp/appsupport/appsupport.component';
import { AppoverviewComponent } from './mobileapp/appoverview/appoverview.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { ClientsComponent } from './clients/clients.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonsModule, CardsModule, InputsModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { AngularComponent } from './web-development/angular/angular.component';
import { ReactNativeComponent } from './web-development/react-native/react-native.component';
import { ReactJsComponent } from './web-development/react-js/react-js.component';
import { NodeJsComponent } from './web-development/node-js/node-js.component';
import { FrontendComponent } from './web-development/frontend/frontend.component';
import { BackendComponent } from './web-development/backend/backend.component';
import { DesignComponent } from './design/design.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md';
import { NavbarModule } from 'angular-bootstrap-md';
import { FlutterappComponent } from './mobileapp/flutterapp/flutterapp.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { BuynowComponent } from './buynow/buynow.component';
import {MatSelectModule} from '@angular/material/select';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    AboutComponent,
    PageheaderComponent,
    PagefooterComponent,
    MissionComponent,
    CeoComponent,
    PortfolioComponent,
    CareerComponent,
    MobileappComponent,
    AndroidComponent,
    IosComponent,
    IotComponent,
    AppsupportComponent,
    AppoverviewComponent,
    ItConsultingComponent,
    DigitalMarketingComponent,
    ClientsComponent,
    FaqComponent,
    ContactComponent,
    AngularComponent,
    ReactNativeComponent,
    ReactJsComponent,
    NodeJsComponent,
    FrontendComponent,
    BackendComponent,
    DesignComponent,
    FlutterappComponent,
    EcommerceComponent,
    BuynowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    CardsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    NgbModule,
    TooltipModule,
    ModalModule,
    PopoverModule,
    NavbarModule,
    MatSelectModule
],

providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
