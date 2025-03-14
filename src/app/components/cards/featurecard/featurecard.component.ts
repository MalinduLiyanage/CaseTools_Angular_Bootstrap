import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-featurecard',
  imports: [],
  templateUrl: './featurecard.component.html',
  styleUrl: './featurecard.component.scss'
})
export class FeaturecardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
}
