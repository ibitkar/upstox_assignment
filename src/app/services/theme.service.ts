import { Injectable } from '@angular/core';

export const darkTheme = {
  'background': '#202c37',
  'foreground': '#2b3945',
  'color': '#fff',
  'box-shadow': '0 3px 5px #2c3235',
  'box-shadow2': '0 3px 15px #2c3235'
};

export const lightTheme = {
  'background': '#fff',
  'foreground': '#fff',
  'color': '#111517',
  'box-shadow': '0 3px 5px #ebe5e5',
  'box-shadow2': '0 3px 15px #ebe5e5'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
  constructor() { }
}
