import { Component, OnInit, Input } from '@angular/core';

declare interface Project {
  image: string;
  name: string;
  year: number;
  employer: string;
  role: string[];
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.less']
})

export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
