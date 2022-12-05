export interface WrapperResponse<T> {
    ok: boolean;
    body: T;
    message: string;
}