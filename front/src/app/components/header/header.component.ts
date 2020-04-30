import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/models/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public themes: Theme[] = [
    { theme: 'dark', name: 'luna-amber', code: '0' },
    { theme: 'light', name: 'rhea', code: '1' },
    { theme: 'dark-light', name: 'nova-dark', code: '2' },
  ];
  public selectedTheme?: Theme =
    JSON.parse(localStorage.getItem('project-plus-theme')) || this.themes[0];

  constructor() {}

  ngOnInit(): void {
    this.themeSwitcher();
  }

  public themeSwitcher() {
    const link: any = document.querySelector('#theme');
    link.href = `assets/themes/${this.selectedTheme.name}/theme.css`;
    localStorage.setItem(
      'project-plus-theme',
      JSON.stringify(this.selectedTheme)
    );
  }
}