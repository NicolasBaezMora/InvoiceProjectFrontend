import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WrapperResponse } from '../interfaces/WrapperResponse';
import { BranchOfficeDTO } from '../interfaces/BranchOfficeDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  private baseUrl: string = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getBranchOffices(): Observable<WrapperResponse<BranchOfficeDTO[]>> {
    return this.httpClient.get<WrapperResponse<BranchOfficeDTO[]>>(`${this.baseUrl}branchOffice`);
  }

}
