import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  @Input() skillName: string;
  @Input() skillClass: string;
  @Input() years: number;
  @Input() percentage: number;

  constructor() { }

  ngOnInit() {
  }

}
