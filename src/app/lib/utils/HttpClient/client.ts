import { DEFAULT_HEADERS, DEFAULT_BASE_URL } from "./config"

// Types
import type { HttpMethods } from "./types"

class HttpClient {
  private headers: HeadersInit = DEFAULT_HEADERS
  private body?: BodyInit
  private config?: RequestInit
  private baseUrl: string = DEFAULT_BASE_URL

  constructor()
  constructor(body?: BodyInit)
  constructor(headers?: HeadersInit, body?: BodyInit)
  constructor(...args: any[]) {
    if (args.length === 1) {
      this.onlyBody(args[0] as BodyInit)
    }
    if (args.length >= 2) {
      const headers = args[0] as HeadersInit
      const body = args[1] as BodyInit
      this.initAll(headers, body)
    }
  }

  private onlyBody(body: BodyInit) {
    this.body = body
  }

  private initAll(headers?: HeadersInit, body?: BodyInit) {
    if (headers)
      this.headers = {
        ...this.headers,
        ...headers,
      }
    if (body) this.body = body
  }

  private getMergedUrl(url: string) {
    const newUrl = new URL(url, this.baseUrl)
    return newUrl
  }

  private bootstrap(url: string, method: HttpMethods) {
    const mergedUrl = this.getMergedUrl(url)
    return fetch(mergedUrl, {
      headers: this.headers,
      method,
      body: this.body,
      ...this.config,
    })
  }

  setConfig(config: RequestInit) {
    this.config = config
    return this
  }

  get(url: string) {
    return this.bootstrap(url, "GET")
  }

  post(url: string) {
    return this.bootstrap(url, "POST")
  }

  put(url: string) {
    return this.bootstrap(url, "PUT")
  }

  patch(url: string) {
    return this.bootstrap(url, "PATCH")
  }

  delete(url: string) {
    return this.bootstrap(url, "DELETE")
  }
}

export default HttpClient
