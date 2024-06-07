import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessConsultingComponent } from './components/business-consulting/business-consulting.component';
import { ITNetworkingComponent } from './components/it-networking/it-networking.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'businesses', component: BusinessConsultingComponent },
  { path: 'it-network', component: ITNetworkingComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
