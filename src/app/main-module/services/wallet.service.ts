import { WalletDTO } from './../interfaces/WalletDTO';
import { WrapperResponse } from './../interfaces/WrapperResponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class WalletService {
    
    private baseUrl: string = environment.url;

    constructor(
        private httpClient: HttpClient
    ) {

    }


    public getWallet(email: string, hash: string): Observable<WrapperResponse<WalletDTO>> {
        const params = new HttpParams()
            .set("email", email)
            .set("hash", hash);
        return this.httpClient.get<WrapperResponse<WalletDTO>>(`${this.baseUrl}wallet`, {params});
    }

}


