import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _user$ = new BehaviorSubject<Settings>({
    name: 'Jane Doe',
    email: 'jane@example.com',
    notifications: true,
    darkMode: false,
  } as Settings);

  settings$ = this._user$.asObservable();

  getSettings(): Settings {
    return this._user$.getValue();
  }

  saveUser(name: string, email: string) {
    this._user$.next({ ...this._user$.getValue(), name, email });
  }

  toggleDarkTheme() {
    const current = this._user$.getValue();
    this._user$.next({ ...current, darkMode: !current.darkMode });
  }
}
