import {Component, inject} from '@angular/core';
import {HeroComponent} from '../../components/hero/hero.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FeaturecardComponent} from '../../components/cards/featurecard/featurecard.component';
import {QuizComponent} from '../../components/quiz/quiz.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FooterComponent,
    FeaturecardComponent,
    QuizComponent,
    NavbarComponent,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
