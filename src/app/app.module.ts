import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessConsultingComponent } from './components/business-consulting/business-consulting.component';
import { ITNetworkingComponent } from './components/it-networking/it-networking.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { Section1Component } from './components/home/section-1/section-1.component';
import { Section2Component } from './components/home/section-2/section-2.component';
import { Section3Component } from './components/home/section-3/section-3.component';
import { Section4Component } from './components/home/section-4/section-4.component';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessConsultingComponent,
    ITNetworkingComponent,
    OurTeamComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    NgbPaginationModule,
    NgbAlertModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    TabMenuModule,
    CardModule,
    DividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
