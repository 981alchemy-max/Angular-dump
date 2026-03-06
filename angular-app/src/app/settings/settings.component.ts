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
  name = 'Jane Doe';
  email = 'jane@example.com';
  notifications = true;
  darkMode = false;

  constructor(private settingsService: SettingsService) {}

  onSubmit(): void {
    this.settingsService.saveUser(this.name, this.email);
  }
}
