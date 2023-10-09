import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Profile } from '../../Profile';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-profile-modal',
  templateUrl: './add-profile-modal.component.html',
  styleUrls: ['./add-profile-modal.component.css'],
})
export class AddProfileModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  faTimes = faTimes;
  profiles: Profile[] = this.profilesService.profiles;

  profileModel: Profile = {
    name: '',
    email: '',
    phone: null,
    image: '',
    bio: '',
  };

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {}

  uploadImage(event: any) {
    this.profileModel.image = URL.createObjectURL(event.target.files[0]);
  }

  onSubmit(): void {
    this.profileModel.id = this.profiles.length + 1;
    this.profilesService.addToProfile(this.profileModel);
    this.closeModal.emit();
  }

  closeAddModal() {
    this.closeModal.emit();
  }
}
