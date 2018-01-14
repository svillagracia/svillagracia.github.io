import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  public links: { url: string; name: string; tab: string; }[];

  constructor(private router: Router) {
    this.links = [
      {
        url: 'homepage',
        name: 'homepage.component.html',
        tab: 'homepage'
      },
      {
        url: 'about',
        name: 'about.component.html',
        tab: 'about'
      },
      {
        url: 'repertoire',
        name: 'repertoire.component.html',
        tab: 'repertoire'
      },
      {
        url: 'projects',
        name: 'projects.component.html',
        tab: 'projects'
      }
    ];
  }

  public closeEditor(url: string): void {
    this.links.forEach((link, index) => {
      if (url === link.url) {
        if (this.links.length < 2) {
          this.router.navigate(['**']);
        } else {
          if (url === this.router.url.substr(1, this.router.url.length)) {
            if (this.links[index - 1]) {
              this.router.navigate([this.links[index - 1].url]);
            } else {
              this.router.navigate([this.links[index + 1].url]);
            }
          }
        }
        this.links.splice(index, 1);
      }
    });
  }

  public addEditor(link: any): void {
    this.links.push(link);
  }
}
