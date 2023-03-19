export interface ResultWebInterface {
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
  mime?: string;
  fileFormat?: string;
}

export interface Pagemap {
  cse_thumbnail?: CseThumbnail[];
  metatags: Metatag[];
  cse_image?: CseImage[];
  person?: Person[];
  interactioncounter?: Interactioncounter[];
  collection?: Collection[];
  socialmediaposting?: Socialmediaposting[];
  offer?: Offer[];
  product?: Product[];
  hproduct?: Hproduct[];
}

export interface CseThumbnail {
  src: string;
  width: string;
  height: string;
}

export interface Metatag {
  "application-name"?: string;
  "msapplication-starturl"?: string;
  "msapplication-tilecolor"?: string;
  "og:image"?: string;
  "og:type"?: string;
  "twitter:card"?: string;
  "twitter:title"?: string;
  "theme-color"?: string;
  "og:site_name"?: string;
  handheldfriendly?: string;
  "twitter:url"?: string;
  "og:title"?: string;
  "og:description"?: string;
  "msapplication-navbutton-color"?: string;
  "twitter:image"?: string;
  "fb:app_id"?: string;
  "apple-mobile-web-app-status-bar-style"?: string;
  viewport?: string;
  "twitter:description"?: string;
  "apple-mobile-web-app-capable"?: string;
  mobileoptimized?: string;
  "mobile-web-app-capable"?: string;
  "og:locale"?: string;
  "og:url"?: string;
  category?: string;
  "reply-to"?: string;
  "article:published_time"?: string;
  "article:section"?: string;
  "og:image:type"?: string;
  "og:image:secure_url"?: string;
  "article:tag"?: string;
  "article:modified_time"?: string;
  organization?: string;
  "twitter:site"?: string;
  moddate?: string;
  creator?: string;
  creationdate?: string;
  producer?: string;
  "apple-itunes-app"?: string;
  "og:image:alt"?: string;
  "al:ios:app_name"?: string;
  "al:android:package"?: string;
  google?: string;
  "al:ios:url"?: string;
  "al:ios:app_store_id"?: string;
  "al:android:url"?: string;
  referrer?: string;
  "twitter:image:alt"?: string;
  "fb-version"?: string;
  "al:android:app_name"?: string;
  title?: string;
  "og:image_secure_url"?: string;
  "apple-mobile-web-app-title"?: string;
  "facebook-domain-verification"?: string;
  "msvalidate.01"?: string;
  "yandex-verification"?: string;
  y_key?: string;
  layout?: string;
}

export interface CseImage {
  src: string;
}

export interface Person {
  identifier: string;
  givenname: string;
  additionalname: string;
}

export interface Interactioncounter {
  userinteractioncount: string;
  interactiontype: string;
  name: string;
  url?: string;
}

export interface Collection {
  name: string;
}

export interface Socialmediaposting {
  identifier: string;
  commentcount: string;
  articlebody: string;
  position: string;
  datecreated: string;
  datepublished: string;
  url: string;
  ispartof?: string;
  mainentityofpage?: string;
}

export interface Offer {
  pricecurrency: string;
  price: string;
  availability: string;
}

export interface Product {
  image: string;
  gtin13: string;
  name: string;
}

export interface Hproduct {
  fn: string;
  photo: string;
  currency: string;
  currency_iso4217: string;
}
