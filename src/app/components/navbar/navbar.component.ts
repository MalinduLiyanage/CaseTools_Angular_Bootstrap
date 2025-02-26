import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslationService} from '../../services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet, RouterLink, TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private translationService: TranslationService) {}

  translateLang(language: string) {
    this.translationService.translateLang(language);
  }
}
