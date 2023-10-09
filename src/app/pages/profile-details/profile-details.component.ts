import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';
import { Profile } from '../../Profile';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  profiles: Profile[] = [];
  profile: Profile | undefined;

  constructor(
    private route: ActivatedRoute,
    private profilesService: ProfilesService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const profileId = Number(routeParams.get('id'));

    this.profile = this.profilesService.getProfile(profileId);

    console.log(this.profile);
  }
}
