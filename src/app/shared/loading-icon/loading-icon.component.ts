import { Component, Input } from '@angular/core';

@Component({
  selector: '<loading-icon></loading-icon>',
  templateUrl: 'loading-icon.component.html',
  styleUrls: ['./loading-icon.css']
})
export class LoadingIconComponent {
  @Input() text = 'Loading...';
}
