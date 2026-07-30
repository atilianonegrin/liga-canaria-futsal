import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './core/layout/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent],
  template: `
    <app-site-header />
    <router-outlet />
  `,
  styleUrl: './app.css'
})
export class App {}
