import { Component, OnInit } from '@angular/core';

declare interface Skill {
  name: string;
  class: string;
  years: number;
  percentage: number;
}

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.less']
})

export class RepertoireComponent implements OnInit {
  public skills: Skill[];

  constructor() {
    this.skills = [
      {
        name: 'HTML_CSS',
        class: 'htmlcss',
        years: 3,
        percentage: 85
      },
      {
        name: 'JavaScript',
        class: 'javascript',
        years: 3,
        percentage: 80
      },
      {
        name: 'Angular_2-4',
        class: 'angular2',
        years: 2,
        percentage: 90
      },
      {
        name: 'LESS_SASS',
        class: 'lesssass',
        years: 2.5,
        percentage: 70
      },
      {
        name: 'PostgreSQL',
        class: 'postgres',
        years: 3,
        percentage: 60
      },
      {
        name: 'NodeJS',
        class: 'node',
        years: 3,
        percentage: 75
      },
      {
        name: 'ExpressJS',
        class: 'express',
        years: 2,
        percentage: 80
      },
      {
        name: 'TypeScript',
        class: 'typescript',
        years: 2,
        percentage: 80
      },
      {
        name: 'RxJS',
        class: 'rxjs',
        years: 1.75,
        percentage: 55
      },
      {
        name: 'MVC',
        class: 'mvc',
        years: 3,
        percentage: 80
      },
      {
        name: 'TestDrivenDevelopment',
        class: 'tdd',
        years: 2.25,
        percentage: 65
      },
      {
        name: 'AJAX',
        class: 'ajax',
        years: 3,
        percentage: 80
      },
      {
        name: 'APIs',
        class: 'api',
        years: 3,
        percentage: 75
      },
      {
        name: 'MongoDB',
        class: 'mongo',
        years: 1.5,
        percentage: 60
      },
      {
        name: 'OAuth',
        class: 'oauth',
        years: 1.75,
        percentage: 55
      },
      {
        name: 'Git',
        class: 'git',
        years: 3,
        percentage: 95
      },
      {
        name: 'Bootstrap',
        class: 'bootstrap',
        years: 3,
        percentage: 80
      },
      {
        name: 'RubyOnRails',
        class: 'ror',
        years: 1,
        percentage: 40
      },
      {
        name: 'ReactJS',
        class: 'react',
        years: 0.5,
        percentage: 25
      },
      {
        name: 'Deployment',
        class: 'deployment',
        years: 2,
        percentage: 50
      },
      {
        name: 'ContinuousIntegration',
        class: 'ci',
        years: 0.5,
        percentage: 35
      },
      {
        name: 'AWS',
        class: 'aws',
        years: 0.5,
        percentage: 20
      },
      {
        name: 'Heroku',
        class: 'heroku',
        years: 2,
        percentage: 55
      },
      {
        name: 'ProjectManagement',
        class: 'pm',
        years: 1,
        percentage: 60
      },
      {
        name: 'AgileMethodologies',
        class: 'agile',
        years: 2.75,
        percentage: 80
      },
      {
        name: 'TeamBuilding',
        class: 'teambuilding',
        years: 1,
        percentage: 60
      },
      {
        name: 'ClientRelations',
        class: 'cr',
        years: 4,
        percentage: 80
      },
      {
        name: 'BusinessDevelopment',
        class: 'bizdev',
        years: 1,
        percentage: 45
      },
      {
        name: 'ResourceManagement',
        class: 'rm',
        years: 1,
        percentage: 55
      },
      {
        name: 'Strategy',
        class: 'strategy',
        years: 1,
        percentage: 55
      },
    ];
  }

  ngOnInit() {
  }

}
