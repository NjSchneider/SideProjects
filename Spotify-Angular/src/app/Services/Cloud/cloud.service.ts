import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  private apiUrl: string = "http://localhost:8012/WinterBreak2019/Server/api/list.php";

  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get(this.apiUrl);
  }

}
