import { DEFAULT_HEADERS, DEFAULT_BASE_URL } from "./config";

import HttpErrorException from "./exception";

// Types
import type { HttpMethods } from "./types";

class HttpClient {
  private headers: HeadersInit;
  private config?: RequestInit;
  private baseUrl: string;
  private abortController: AbortController;

  constructor() {
    this.headers = DEFAULT_HEADERS;

    this.baseUrl = DEFAULT_BASE_URL;

    this.abortController = new AbortController();
  }

  public addHeaders(headers: HeadersInit) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
  }

  public abort() {
    this.abortController.abort();
  }

  private mergeWithBaseURL(url: string) {
    const newUrl = new URL(url, this.baseUrl);
    return newUrl;
  }

  private async makeRequest<T extends BodyInit>(
    url: string,
    method: HttpMethods,
    payload: T
  ) {
    const mergedUrl = this.mergeWithBaseURL(url);

    const response = await fetch(mergedUrl, {
      headers: this.headers,
      method,
      body: payload,
      signal: this.abortController.signal,
      ...this.config,
    });

    if (!response.ok) {
      const errorResponse = await response.json();

      let message = "There was an error fetching the request";

      if (errorResponse.error) {
        message = errorResponse.error;
      }

      throw new HttpErrorException(message);
    }

    return response;
  }

  setConfig(config: RequestInit) {
    this.config = config;
    return this;
  }

  get<T extends BodyInit>(url: string, payload: T) {
    return this.makeRequest(url, "GET", payload);
  }

  post<T extends BodyInit>(url: string, payload: T) {
    return this.makeRequest(url, "POST", payload);
  }

  put<T extends BodyInit>(url: string, payload: T) {
    return this.makeRequest(url, "PUT", payload);
  }

  patch<T extends BodyInit>(url: string, payload: T) {
    return this.makeRequest(url, "PATCH", payload);
  }

  delete<T extends BodyInit>(url: string, payload: T) {
    return this.makeRequest(url, "DELETE", payload);
  }
}

export default HttpClient;
