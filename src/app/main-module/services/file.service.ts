import { ResponseFile } from './../interfaces/ResponseFile';
import { WrapperResponse } from './../interfaces/WrapperResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl: string = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }


  public loadFile(hash: string, file: File): Observable<WrapperResponse<ResponseFile>> {
    const formData = new FormData();
    formData.append("hash", hash);
    formData.append("file", file);
    return this.httpClient.post<WrapperResponse<ResponseFile>>(`${this.baseUrl}file/upload`, formData);
  }

}
