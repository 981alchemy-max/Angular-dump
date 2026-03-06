import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnDestroy {
  name: string;
  email: string;
  notifications: boolean;
  darkMode: boolean;

  private settingsSub: Subscription;

  constructor(private settingsService: SettingsService) {
    const settings = this.settingsService.getSettings();
    this.name = settings.name;
    this.email = settings.email;
    this.notifications = settings.notifications;
    this.darkMode = settings.darkMode;

    this.settingsSub = this.settingsService.settings$.subscribe((s) => {
      this.darkMode = s.darkMode;
    });
  }

  ngOnDestroy(): void {
    this.settingsSub.unsubscribe();
  }

  onSubmit(): void {
    this.settingsService.saveUser(this.name, this.email);
  }

  onDarkModeToggle(): void {
    this.darkMode = !this.darkMode;
    this.settingsService.toggleDarkTheme();
  }
}
