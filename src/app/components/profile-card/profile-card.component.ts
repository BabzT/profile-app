import { Component, Input } from '@angular/core';
import { Profile } from '../../Profile';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  @Input() profile: Profile | undefined;
}
