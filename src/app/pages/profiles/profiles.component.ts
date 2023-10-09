import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Profile } from '../../Profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[] = [];

  addprofilemodal: boolean = false;

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  addNew(): void {
    this.addprofilemodal = !this.addprofilemodal;
  }
}
