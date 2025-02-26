import {Component, inject} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {translate} from '@angular/localize/tools';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
