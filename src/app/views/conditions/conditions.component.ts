import {Component, inject} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-conditions',
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
