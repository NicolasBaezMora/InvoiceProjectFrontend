import { DateRange } from './../interfaces/DateRange';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseData } from './../interfaces/ResponseData';
import { WrapperResponse } from './../interfaces/WrapperResponse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommissionDTO } from '../interfaces/CommissionDTO';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  private baseUrl: string = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCommissions(hash: string, page: number): Observable<WrapperResponse<ResponseData<CommissionDTO>>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("page", page);
    return this.httpClient.get<WrapperResponse<ResponseData<CommissionDTO>>>(`${this.baseUrl}commission`, {params});
  }

  public getCommissionsByDateRange(hash: string, dateRange: DateRange): Observable<WrapperResponse<CommissionDTO[]>> {
    const params = new HttpParams()
      .set("hash", hash)
      .set("dateStart", dateRange.dateStart)
      .set("dateEnd", dateRange.dateEnd);
    return this.httpClient.get<WrapperResponse<CommissionDTO[]>>(`${this.baseUrl}commission/commissionsByDateRange`, {params});
  }

  public generateCommissionManually(id: string, dateStart: string, dateEnd: string): Observable<WrapperResponse<null>> {
    return this.httpClient.post<WrapperResponse<null>>(`${this.baseUrl}commission?idBranchOffice=${id}&dateInitial=${dateStart}&dateEnd=${dateEnd}`, {});
  }
}
