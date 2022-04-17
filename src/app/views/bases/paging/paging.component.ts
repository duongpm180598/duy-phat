import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnChanges {
  @Input() total!: number; // total records
  @Input() totalPage!: number; // total pages
  @Input() currentPage!: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();
  pageSize = 25;
  pageRange = 2;
  paginationArray: Array<number> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    let totalPages;
    if (this.total % this.pageSize === 0) {
      totalPages = Math.floor(this.total / this.pageSize);
    } else {
      totalPages = Math.floor(this.total / this.pageSize) + 1;
    }
    if (changes['currentPage'] || changes['total']) {
      this.paginationArray = [];
      for (
        let i = this.currentPage - this.pageRange;
        i <= this.currentPage + this.pageRange;
        i++
      ) {
        if (i >= 0 && i < totalPages) this.paginationArray.push(i + 1);
      }
    }
  }

  handeChangePage(indexPage: number): void {
    this.currentPage = indexPage;
    this.changePage.emit(indexPage);
  }
}
