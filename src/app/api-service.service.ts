import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ApiServiceService {

    constructor(private _http: Http) {}
    apiCall(path): Observable<any> {
        let headers;
        let completePath=`assets/jsonData/${path}`;
        headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.get(completePath, options).map((res: Response) => {
        return res.json();
        })
            //...errors if any
            .catch((error: any) => {console.log(error);
            return Observable.throw(error.json().error || 'Server error')});

    }
}
