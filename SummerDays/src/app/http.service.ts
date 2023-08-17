import { Injectable } from '@angular/core';
import { HttpResponse } from './HttpResponse';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpSercive{
    public static readonly RESPONSE_SUCCESS_CODE ="SUCCESS";
    public static readonly RESPONSE_FAILURE_CODE = "FAILURE";
    private authenticated = false;

    private url: string = "https://getconnected-b34a2-default-rtdb.europe-west1.firebasedatabase.app/";
    private json: string = ".json";
    // private url: string = "http://localhost:8080";

    constructor(private http: HttpClient) {
    }

    public easy(): any{
      return this.http.get(this.url + "/colors" + this.json).subscribe(data =>{
        const res = data;
        return res;
      });
    }

    public post<T>(endpoint: string, body: T, implementation : (data: T) => void, onFailure: () => void = () =>{}){
        this.http.post<HttpResponse<T>>(this.url + endpoint + this.json, body).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
    }

    public get<T>(endpoint: string) : Observable<T> {
      return this.http.get<T>(this.url + endpoint + this.json);
    }

    public put<T>(endpoint : string, body : T, implementation : (data : T) => void, onFailure: () => void) {
      this.http.put<HttpResponse<T>>(this.url + endpoint + this.json, body).subscribe((response) => {
        HttpSercive.callImplementation<T>(response, implementation, onFailure);
      });
    }

    public delete<T>(endpoint: string, implementation : (data : T) => void, onFailure: () => void){
      this.http.delete<HttpResponse<T>>(this.url + endpoint + this.json).subscribe((response) =>{
        HttpSercive.callImplementation<T>(response, implementation, onFailure);
      });
    }
    
    private static callImplementation<T>(response : HttpResponse<T>, implementation : (data : T) => void | null, onFailure : () => void) : void {
        // if error
        if (response.response === HttpSercive.RESPONSE_FAILURE_CODE) {
          HttpSercive.onError(response.error);
          onFailure();
        }
        else {
          if (implementation !== null)
            implementation(response.data);
        }
      }
      private static onError(message : string) {
        console.log(message);
      }
}