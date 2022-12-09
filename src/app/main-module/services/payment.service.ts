import { ResponseData } from './../interfaces/ResponseData';
import { WrapperResponse } from './../interfaces/WrapperResponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDTO } from '../interfaces/PaymentDTO';

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

}
