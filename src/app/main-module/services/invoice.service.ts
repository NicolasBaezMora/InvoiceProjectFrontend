import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WrapperResponse } from '../interfaces/WrapperResponse';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../interfaces/ResponseData';
import { InvoiceDTO } from '../interfaces/InvoiceDTO';

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

  public createInvoice() {
    
  }

}
