import {Component, inject} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-privacy',
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
