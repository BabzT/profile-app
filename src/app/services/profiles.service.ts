import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../Profile';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  profiles: Profile[] = [
    // {
    //   id: 1,
    //   name: 'Akinwobi Babz',
    //   email: 'oluwadunrebecca@gmail.com',
    //   phone: 7056869439,
    //   image: '',
    //   bio: 'I want this job because it is a position that excites me and is an excellent fit for my qualifications. The company is growing and I see many opportunities to diversify my skills in this position.I researched your company before applying and I’m attracted to your culture and how you support your workforce to be the best they can be. If I am successful, I want to build my career with your company and become a valuable asset to your team.',
    // },
  ];

  constructor() {}

  getProfiles(): Observable<Profile[]> {
    const profiles = of(this.profiles);
    return profiles;
  }

  addToProfile(profile: Profile) {
    this.profiles.push(profile);
  }

  getProfile(id: number) {
    const profile = this.profiles.find((profile) => profile.id === id);
    return profile;
  }
}
