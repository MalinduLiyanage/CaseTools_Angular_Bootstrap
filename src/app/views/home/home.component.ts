import { Component } from '@angular/core';
import {HeroComponent} from '../../components/hero/hero.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FeaturecardComponent} from '../../components/cards/featurecard/featurecard.component';
import {QuizComponent} from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FooterComponent,
    FeaturecardComponent,
    QuizComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
