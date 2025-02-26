import { Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ContactComponent} from './views/contact/contact.component';
import {AboutComponent} from './views/about/about.component';
import {ServicesComponent} from './views/services/services.component';
import {PrivacyComponent} from './views/privacy/privacy.component';
import {ConditionsComponent} from './views/conditions/conditions.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'terms',
    component:ConditionsComponent
  },

];


