import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";
import * as qs from "query-string";
import {Observable} from "rxjs";

export const GET = <T>(url: string, params: {} = null): Observable<T> => {
    const query = params ? `?${qs.stringify(params)}` : "";
    return ajax.getJSON(url + query);
}

export const POST = <T>(url: string, data: {} = {}): Observable<T> => {
    const headers = { "Content-Type": "application/json" };
    return ajax.post(url, data, headers).pipe(
        map(r => r.response)
    );
};
