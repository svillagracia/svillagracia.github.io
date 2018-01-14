import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  @Input() links: { url: string; name: string; tab: string; }[];
  @Output() linkToAdd: EventEmitter<any> = new EventEmitter<any>();
  public editors = true;
  public openRoot = true;
  public projects = true;

  constructor() { }

  ngOnInit() {
  }

  public truncateString(str: string): string {
    if (str.length > 16) {
      return str.substring(0, 13) + '...';
    } else {
      return str;
    }
  }

  public openEditor(editor: { url: string; name: string; tab: string; }): void {
    if (this.links.findIndex(index => index.url === editor.url) < 0) {
      this.linkToAdd.emit(editor);
    }
  }

}
