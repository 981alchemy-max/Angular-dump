import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  name: string;
  constructor(
    private settingsService: SettingsService,
    private avatarService: AvatarService
  ) {
    this.name = this.settingsService.getUser().name;
  }

  getAvatarColor() {
    return this.avatarService.getAvatarColor(this.name);
  }

  getInitials() {
    return this.avatarService.getInitials(this.name);
  }
}
