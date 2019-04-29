import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttp {
  private static readonly API_BASE_URL = './api';

  constructor(
    private httpClient: HttpClient,
  ) {}

  buildApiUrl(url: string): string {
    return ApiHttp.API_BASE_URL + url;
  }

  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {@link Request} instance (Hack: for now, it can only be a string). If the first argument is a url, an optional {@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {@link BaseRequestOptions} before performing the request.
   */
  request(method: string, url: string, options?): Observable<any> {
    const finalOptions = this.mergeWithApiHttpOptions(options);
    return this.httpClient.request(method, this.buildApiUrl(url), finalOptions);
  }

  private mergeWithApiHttpOptions(options: any = {}): {} {
    if (!options.headers) {
      options.headers = new HttpHeaders();
    }
    if (!options.headers.has('Cache-Control')) {
      options.headers.set('Cache-Control', 'no-cache');
    }
    if (!options.headers.has('Pragma')) {
      options.headers.set('Pragma', 'no-cache');
    }
    return options;
  }

  private buildMethodOptions(options: any = {}, body?: any) {
    const result = options;
    result.body = body;
    return result;
  }

  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?): Observable<any> {
    return this.request('GET', url, this.buildMethodOptions(options));
  }

  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?): Observable<any> {
    return this.request('POST', url, this.buildMethodOptions(options, body));
  }

  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any, options?): Observable<any> {
    return this.request('PUT', url, this.buildMethodOptions(options, body));
  }

  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?): Observable<any> {
    return this.request('DELETE', url, this.buildMethodOptions(options));
  }

  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?): Observable<any> {
    return this.request('PATCH', url, this.buildMethodOptions(options, body));
  }

  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?): Observable<any> {
    return this.request('HEAD', url, this.buildMethodOptions(options));
  }

  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?): Observable<any> {
    return this.request('OPTIONS', url, this.buildMethodOptions(options));
  }
}