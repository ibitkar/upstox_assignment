import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  showLoader: boolean;
  constructor(private httpClient: HttpClient) { }

  //Generic service method for get

  getData(url) {
    return this.httpClient.get(url);
  }
}
