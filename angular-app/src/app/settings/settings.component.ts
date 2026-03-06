import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  name: string;
  email: string;
  notifications: boolean;
  darkMode: boolean;

  constructor(private settingsService: SettingsService) {
    const user = this.settingsService.getUser();
    this.name = user.name;
    this.email = user.email;
    this.notifications = user.notifications;
    this.darkMode = user.darkMode;
  }

  onSubmit(): void {
    this.settingsService.saveUser(this.name, this.email);
  }
}
