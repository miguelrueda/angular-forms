import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

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

  postError = false;
  postErrorMsg = '';
  subscriptionTypes: Observable<string[]>;

  userSettings: UserSettings = { ...this.originalUserSettings };

  result: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  private onHttpError(error: any) {
    console.log(' error ', error);
    this.postError = true;
    this.postErrorMsg = error.message;
  }

  onSubmit(form: NgForm) {
    console.log(`in onSubmit:`, form.valid);
    if (form.valid) {

      this.dataService.postUserSettingsForm(this.userSettings).subscribe(result => {
        console.log(`success`, result);
      }, (error) => this.onHttpError(error));
    } else {
      this.postError = true;
      this.postErrorMsg = "Please fix the errors above";
    }
  }

  onBlur(field: NgModel) {
    console.log(field.valid);
  }

}
