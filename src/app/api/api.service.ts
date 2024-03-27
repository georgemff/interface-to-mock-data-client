import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl:string = "http://localhost:3000"
    constructor(
      private http: HttpClient
    ) {
    }

    public convert(body: {value: string, count: number}): Observable<any> {
     return this.http.post(this.baseUrl + '/convert', {
        interface: body.value,
        count: body.count
      })
    }
}
