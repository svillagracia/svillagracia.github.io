import { Component, OnInit } from '@angular/core';

declare interface Project {
  image: string;
  name: string;
  year: number;
  employer: string;
  role: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  constructor() {
    this.projects = [
      {
        image: '',
        name: 'Plymouth Leadership College',
        year: 2017,
        employer: 'Republic Development & Design',
        role: [ 'developer', 'project manager']
      },
      {
        image: '',
        name: 'Nomadic Admin Portal',
        year: 2017,
        employer: 'Nomadic Learning (contract)',
        role: [ 'lead front end developer' ]
      },
      {
        image: '',
        name: 'Alaska InFlight Application',
        year: 2015,
        employer: 'Indigo Slate',
        role: ['front end developer']
      },
      {
        image: '',
        name: 'Alaska Airlines Styleguide',
        year: 2016,
        employer: 'Indigo Slate',
        role: [ 'developer' ]
      },
      {
        image: '',
        name: 'Microsoft Cyber Secuirty Quiz',
        year: 2015,
        employer: 'Indigo Slate',
        role: [ 'front end developer' ]
      }
    ];
  }

  ngOnInit() {
  }

}
