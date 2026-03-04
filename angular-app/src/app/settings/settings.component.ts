import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  // TODO: Save user details upon submit
  name = 'Jane Doe';
  email = 'jane@example.com';
  notifications = true;
  darkMode = false;
}
