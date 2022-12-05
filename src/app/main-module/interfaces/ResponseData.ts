export interface ResponseData<T> {
    total: number;
    data: T[];
    totalPages: number;
    currentPage: number;
}