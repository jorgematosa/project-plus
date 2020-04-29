import { Component} from '@angular/core';
import { Theme } from 'src/app/shared/models/theme';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public date1: Date;
  public themes: Theme[] = [
    { name: 'dark', url: '/assets/themes/luna-amber/theme.css' },
    { name: 'light', url: '/assets/themes/rhea/theme.css' },
  ];
  public selectedTheme: Theme;
  public cssUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.selectedTheme = this.themes[0];
    this.loadStyle(this.selectedTheme);
  }

  public loadStyle(style: Theme) {
      this.cssUrl = this.sanitizer.bypassSecurityTrustResourceUrl(style.url);
  }
}
