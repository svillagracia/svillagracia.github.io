import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less']
})
export class TabNavComponent implements OnInit {
  @Input() links: { url: string; name: string; tab: string; }[];
  @Output() linkToClose: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public truncateString(str: string): string {
    if (str.length > 10) {
      return str.substring(0, 7) + '...';
    } else {
      return str;
    }
  }

  public close(url: string): void {
    this.linkToClose.emit(url);
  }

}
