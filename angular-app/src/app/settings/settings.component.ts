import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  name = 'Jane Doe';
  email = 'jane@example.com';
  notifications = true;
  darkMode = false;

  onSubmit(): void {
    console.log('Settings saved:', {
      name: this.name,
      email: this.email,
      notifications: this.notifications,
      darkMode: this.darkMode,
    });
  }
}
