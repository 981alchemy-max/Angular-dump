import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  private settingsSub!: Subscription;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsSub = this.settingsService.settings$.subscribe((settings) => {
      document.body.classList.toggle('dark', settings.darkMode);
    });
  }

  ngOnDestroy() {
    this.settingsSub.unsubscribe();
  }
}
