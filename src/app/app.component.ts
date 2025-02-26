import {Component, inject} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'case-tools-bootstrap';
  translate: TranslateService = inject(TranslateService);
  translateLang(language: string) {
    this.translate.use(language);
  }
}
