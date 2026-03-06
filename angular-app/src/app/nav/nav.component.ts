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
  private userSub!: Subscription;

  constructor(
    private settingsService: SettingsService,
    private avatarService: AvatarService
  ) {}

  ngOnInit() {
    this.userSub = this.settingsService.user$.subscribe((user) => {
      this.name = user.name;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  getAvatarColor() {
    return this.avatarService.getAvatarColor(this.name);
  }

  getInitials() {
    return this.avatarService.getInitials(this.name);
  }
}
