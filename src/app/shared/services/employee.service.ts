import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {
  URL = 'https://jsonplaceholder.typicode.com/posts';
  comments;
  constructor(private http: Http) {}

  headers = new Headers({'Content-Type': 'application/json' });
  options = {};

  getEmployees() {
    return this.http.get('./employee.json').map((res: Response) => res.json());
  }
}