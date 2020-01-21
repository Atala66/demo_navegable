import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  // HttpHeaders, HttpErrorResponse
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TestFormService {
     public mockUrl = '../../assets/mocks/template_form_test.json';

  constructor(
      private http: HttpClient
  ) { }


     public getMockFormGenerator(): Observable<any> {
         return this.http.get(this.mockUrl);
     }
}
