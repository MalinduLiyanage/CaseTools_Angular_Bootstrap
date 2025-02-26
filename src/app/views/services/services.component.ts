import {Component, inject} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {ServicescardComponent} from '../../components/cards/servicescard/servicescard.component';
import {FeaturecardComponent} from '../../components/cards/featurecard/featurecard.component';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

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
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
