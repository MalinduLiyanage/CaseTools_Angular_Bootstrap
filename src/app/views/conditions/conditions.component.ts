import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';

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

}
