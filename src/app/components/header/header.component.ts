import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkTheme = false;

  constructor(private themeService:ThemeService) { }

  ngOnInit() {
  }

  toggletheme() {
    if (this.darkTheme) {
      this.themeService.toggleLight();
    } else {
      this.themeService.toggleDark();
    }
    this.darkTheme=!this.darkTheme
  }

}
