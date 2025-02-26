import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {ServicescardComponent} from '../../components/cards/servicescard/servicescard.component';
import {FeaturecardComponent} from '../../components/cards/featurecard/featurecard.component';

@Component({
  selector: 'app-services',
  imports: [
    FooterComponent,
    NavbarComponent,
    ServicescardComponent,
    FeaturecardComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
