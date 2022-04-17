export interface RequestParam {
  page: number;
  pageSize: number;
}

export interface DataResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPage: number;
}

export interface MessageResponse {
  status: number;
  message: string;
}

export interface Toast {
  color: string;
  message: string;
  visible?: boolean;
}