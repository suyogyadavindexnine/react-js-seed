export type Pagination = {
  page: number;
  limit: number;
  searchText?: string;
  activeInLast?: number;
  status?: string;
};

export class Pager {
  totalItems: number;

  currentPage: number;

  limit: number;

  totalPages: number;

  startPage: number;

  endPage: number;

  startIndex: number;

  endIndex: number;

  pages: number[];

  constructor(
    totalItems: number,
    currentPage: number,
    limit: number,
    startIndex: number
  ) {
    this.totalItems = totalItems;
    this.currentPage = currentPage;
    this.limit = limit;
    this.startIndex = startIndex;

    // calculate total pages
    this.totalPages = Math.ceil(totalItems / limit);
    let startPage: number;
    let endPage: number;
    const maxPages = 10;
    if (this.totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
        // current page near the end
        startPage = this.totalPages - maxPages + 1;
        endPage = this.totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    // create an array of pages to ng-repeat in the pager control
    this.pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );
  }
}

export type PaginationResponseDto<T> = {
  records: T[];
  pager: Pager;
};

export const initalPaginationData: PaginationResponseDto<any> = {
  pager: new Pager(0, 1, 10, 0),
  records: []
};

export const initialPagination: Pagination = {
  page: 1,
  limit: 10
};
