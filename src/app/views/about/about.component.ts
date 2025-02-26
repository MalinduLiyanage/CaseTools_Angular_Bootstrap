import {Component, inject} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-about',
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
