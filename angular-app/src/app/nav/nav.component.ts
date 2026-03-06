import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { SettingsService } from '../services/settings.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit, OnDestroy {
  name: string = '';
  darkMode: boolean = false;
  private settingsSub!: Subscription;

  constructor(
    private settingsService: SettingsService,
    private avatarService: AvatarService
  ) {}

  ngOnInit() {
    this.settingsSub = this.settingsService.settings$.subscribe((settings) => {
      this.name = settings.name;
      this.darkMode = settings.darkMode;
    });
  }

  toggleDarkTheme(): void {
    this.settingsService.toggleDarkTheme();
  }

  ngOnDestroy() {
    this.settingsSub.unsubscribe();
  }

  getAvatarColor() {
    return this.avatarService.getAvatarColor(this.name);
  }

  getInitials() {
    return this.avatarService.getInitials(this.name);
  }
}
