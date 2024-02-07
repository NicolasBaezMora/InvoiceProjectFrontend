import { DateRange } from './../interfaces/DateRange';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WrapperResponse } from '../interfaces/WrapperResponse';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../interfaces/ResponseData';
import { InvoiceDTO } from '../interfaces/InvoiceDTO';
import { State } from '../interfaces/State';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl: string = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPendingInvoices(page: number): Observable<WrapperResponse<ResponseData<InvoiceDTO>>> {
    const params = new HttpParams()
      .set("page", page);
    return this.httpClient.get<WrapperResponse<ResponseData<InvoiceDTO>>>(`${this.baseUrl}invoice/pending`, {params});
  }

  public getPaidInvoices(page: number): Observable<WrapperResponse<ResponseData<InvoiceDTO>>> {
    const params = new HttpParams()
      .set("page", page);
    return this.httpClient.get<WrapperResponse<ResponseData<InvoiceDTO>>>(`${this.baseUrl}invoice/paid`, {params});
  }

  public getPendingInvoicesByDateRange(dateRange: DateRange): Observable<WrapperResponse<InvoiceDTO[]>> {
    const params = new HttpParams()
      .set("dateStart", dateRange.dateStart)
      .set("dateEnd", dateRange.dateEnd);
    return this.httpClient.get<WrapperResponse<InvoiceDTO[]>>(`${this.baseUrl}invoice/pendingDateRange`, {params});
  }

  public getPaidInvoicesByDateRange(dateRange: DateRange): Observable<WrapperResponse<InvoiceDTO[]>> {
    const params = new HttpParams()
      .set("dateStart", dateRange.dateStart)
      .set("dateEnd", dateRange.dateEnd);
    return this.httpClient.get<WrapperResponse<InvoiceDTO[]>>(`${this.baseUrl}invoice/paidDateRange`, {params});
  }


  public getStateInvoices(): Observable<WrapperResponse<State[]>> {
    return this.httpClient.get<WrapperResponse<State[]>>(`${this.baseUrl}stateInvoice`);
  }

  public createInvoice(value: number, date: string, walletId: number, stateId: number): Observable<WrapperResponse<InvoiceDTO>> {
    const body = {
      invoicedValue: value,
      invoicedDate: date,
      wallet: {
        id: walletId
      },
      stateInvoice: {
        id: stateId
      }
    };
    return this.httpClient.post<WrapperResponse<InvoiceDTO>>(`${this.baseUrl}invoice`, body);
  }

}
