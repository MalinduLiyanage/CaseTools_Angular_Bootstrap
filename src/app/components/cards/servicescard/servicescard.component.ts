import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-servicescard',
  imports: [],
  templateUrl: './servicescard.component.html',
  styleUrl: './servicescard.component.scss'
})
export class ServicescardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
