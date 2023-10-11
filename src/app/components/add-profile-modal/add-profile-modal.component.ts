import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Profile } from '../../Profile';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  emailFormatValidator,
  forbiddenValidator,
  passwordValidator,
} from '../../shared/profile.validator';

@Component({
  selector: 'app-add-profile-modal',
  templateUrl: './add-profile-modal.component.html',
  styleUrls: ['./add-profile-modal.component.css'],
})
export class AddProfileModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  faTimes = faTimes;
  profiles: Profile[] = this.profilesService.profiles;
  image = '';

  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(null),
  //   image: new FormControl(''),
  //   bio: new FormControl(''),
  // });

  profileForm = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          forbiddenValidator(/password/),
        ],
      ],
      email: [''],
      subscribe: [false],
      phone: [null],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      image: [''],
      bio: [''],
      alternateEmails: this.fb.array([]),
    },
    { validators: passwordValidator }
  );

  get f() {
    return this.profileForm.controls;
  }

  get alternatemails() {
    return this.profileForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternatemails.push(this.fb.control(''));
  }

  profileModel: Profile = {
    name: '',
    email: '',
    phone: null,
    image: '',
    bio: '',
  };

  constructor(
    private profilesService: ProfilesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // setValue: set value for all form controls
    // Incase you want to prefill a form with data
    // this.profileForm.patchValue({
    //   name: 'Akinwobi Babatunde',
    //   email: 'babatundehezekiah7@gmail.com',
    //   bio: 'I am a big dev!',
    // });

    this.profileForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        const email = this.profileForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  uploadImage(event: any) {
    this.image = URL.createObjectURL(event.target.files[0]);
  }

  onSubmit(): void {
    this.profileForm.value.image = this.image;
    console.log(this.profileForm.value);
  }

  closeAddModal() {
    this.closeModal.emit();
  }
}
