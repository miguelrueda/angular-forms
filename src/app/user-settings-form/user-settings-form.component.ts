import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  result: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(`in onSubmit:`, form.valid);
  }

  onBlur(field: NgModel) {
    console.log(field.valid);
  }

}
