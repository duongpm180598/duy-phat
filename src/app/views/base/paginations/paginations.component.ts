import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.scss'],
})
export class PaginationsComponent {
  @Input() pageSize = 25;
  @Input() currentPage = 1;
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  handeChangePage(indexPage: number): void {
    this.currentPage = indexPage;
    this.changePage.emit(indexPage);
  }

  absMath(num: number): number {
    return Math.abs(num);
  }
}
