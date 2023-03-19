import { ResultWebInterface } from "./result-web.interface";

export interface ResultInterface<T = ResultWebInterface> {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: T[];
}

export interface Url {
  type: string;
  template: string;
}

export interface Queries {
  request: Request[];
  nextPage: NextPage[];
}

export interface Request {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface NextPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface Context {
  title: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export interface Pagemap {
  metatags: Metatag[];
  cse_thumbnail?: CseThumbnail[];
  cse_image?: CseImage[];
  tvseries?: Series[];
  organization?: Organization[];
  moviereview?: Moviereview[];
  sitenavigationelement?: Sitenavigationelement[];
  searchaction?: Searchaction[];
  hatomfeed?: Hatomfeed[];
}

export interface Metatag {
  referrer?: string;
  "og:type"?: string;
  "og:title"?: string;
  "format-detection"?: string;
  handheldfriendly?: string;
  viewport?: string;
  "og:image"?: string;
  "twitter:card"?: string;
  "twitter:site"?: string;
  "og:description"?: string;
  "og:image:width"?: string;
  "twitter:title"?: string;
  "og:site_name"?: string;
  "og:image:height"?: string;
  "msapplication-tileimage"?: string;
  "twitter:creator"?: string;
  "og:image:secure_url"?: string;
  "twitter:image"?: string;
  "facebook-domain-verification"?: string;
  "twitter:description"?: string;
  "og:locale"?: string;
  "og:url"?: string;
  "msapplication-tilecolor"?: string;
  "theme-color"?: string;
  title?: string;
  "fb:pages"?: string;
  "fo-verify"?: string;
  csrf_token?: string;
  "twitter:image:src"?: string;
  "fb:app_id"?: string;
  recaptcha_site_key?: string;
  "og:ttl"?: string;
  "application-name"?: string;
  datatoken?: string;
  "msvalidate.01"?: string;
  "apple-mobile-web-app-title"?: string;
  "google-adsense-platform-domain"?: string;
  "google-adsense-platform-account"?: string;
  "twitter:url"?: string;
  "twitter:aria-text"?: string;
  "og:aria-text"?: string;
}

export interface CseThumbnail {
  src: string;
  width: string;
  height: string;
}

export interface CseImage {
  src: string;
}

export interface Series {
  name: string;
  photo: string;
  url: string;
}

export interface Organization {
  name: string;
  url: string;
}

export interface Moviereview {
  name: string;
}

export interface Sitenavigationelement {
  url: string;
}

export interface Searchaction {
  "query-input": string;
  target: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Hatomfeed {}
