import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormPosterService {

  constructor(private http: Http) {
  }

  /**
   *  submits employee form to the server
   * @param {Employee} employee
   * @returns {Observable<any>}
   */
  postEmployeeForm(employee: Employee): Observable<Response> {
    const body = JSON.stringify(employee);
    const url = 'http://localhost:3100/postemployee';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this
      .http
      .post(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   *
   * @param {Response} res
   * @returns {ClassField[] | {}}
   */
  extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  /**
   *
   * @param error
   * @returns {ErrorObservable}
   */
  handleError(error: any) {
    console.log( `Error ${error}`);
    return Observable.throw(error.statusText);
  }

}
