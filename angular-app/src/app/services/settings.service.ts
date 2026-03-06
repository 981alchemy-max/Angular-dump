import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _user: Settings;
  constructor() {
    this._user = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      notifications: true,
      darkMode: false,
    } as Settings;
  }

  getUser(): Settings {
    return this._user;
  }

  saveUser(name: string, email: string) {
    this._user.name = name;
    this._user.email = email;
  }
}
