import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileModalComponent } from './add-profile-modal.component';

describe('AddProfileModalComponent', () => {
  let component: AddProfileModalComponent;
  let fixture: ComponentFixture<AddProfileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProfileModalComponent]
    });
    fixture = TestBed.createComponent(AddProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
