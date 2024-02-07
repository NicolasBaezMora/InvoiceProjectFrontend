import { ResponseData } from './../interfaces/ResponseData';
import { WrapperResponse } from './../interfaces/WrapperResponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDTO } from '../interfaces/PaymentDTO';
import { DateRange } from '../interfaces/DateRange';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl: string = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }


  public getConsistentPayments(hash: string, page: number): Observable<WrapperResponse<ResponseData<PaymentDTO>>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("page", page);
    return this.httpClient.get<WrapperResponse<ResponseData<PaymentDTO>>>(`${this.baseUrl}payment/consistent`, {params});
  }

  public getInconsistentPayments(hash: string, page: number): Observable<WrapperResponse<ResponseData<PaymentDTO>>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("page", page)
    return this.httpClient.get<WrapperResponse<ResponseData<PaymentDTO>>>(`${this.baseUrl}payment/inconsistent`, {params});
  }

  public getConsistentPaymentsByDateRange(hash: string, dateRange: DateRange): Observable<WrapperResponse<PaymentDTO[]>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("dateStart", dateRange.dateStart)
      .set("dateEnd", dateRange.dateEnd);
    return this.httpClient.get<WrapperResponse<PaymentDTO[]>>(`${this.baseUrl}payment/consistentDateRange`, {params});
  }

  public getInconsistentPaymentsByDateRange(hash: string, dateRange: DateRange): Observable<WrapperResponse<PaymentDTO[]>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("dateStart", dateRange.dateStart)
      .set("dateEnd", dateRange.dateEnd);
    return this.httpClient.get<WrapperResponse<PaymentDTO[]>>(`${this.baseUrl}payment/inconsistentDateRange`, {params});
  }

}
