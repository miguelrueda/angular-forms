import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post(`https://putsreq.com/W6J9p1TsDk7VBpWPvNIC`, userSettings);
  }

  public  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
