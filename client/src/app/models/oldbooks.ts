export interface GoogleBooksApiInterface {
  kind: string;
  totalItems: number;
  items?: Book[] | null;
}
export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}
export interface VolumeInfo {
  title: string;
  authors?: string[] | null;
  publisher: string;
  publishedDate: string;
  description?: string | null;
  industryIdentifiers?: IndustryIdentifiersEntity[] | null;
  readingModes: ReadingModes;
  pageCount?: number | null;
  printType: string;
  categories?: string[] | null;
  averageRating?: number | null;
  ratingsCount?: number | null;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  subtitle?: string | null;
  panelizationSummary?: PanelizationSummary | null;
}
export interface IndustryIdentifiersEntity {
  type: string;
  identifier: string;
}
export interface ReadingModes {
  text: boolean;
  image: boolean;
}
export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: ListPriceOrRetailPrice | null;
  retailPrice?: ListPriceOrRetailPrice1 | null;
  buyLink?: string | null;
  offers?: OffersEntity[] | null;
}
export interface ListPriceOrRetailPrice {
  amount: number;
  currencyCode: string;
}
export interface ListPriceOrRetailPrice1 {
  amount: number;
  currencyCode: string;
}
export interface OffersEntity {
  finskyOfferType: number;
  listPrice: ListPriceOrRetailPrice2;
  retailPrice: ListPriceOrRetailPrice2;
}
export interface ListPriceOrRetailPrice2 {
  amountInMicros: number;
  currencyCode: string;
}
export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: PdfOrEpub;
  pdf: PdfOrEpub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}
export interface PdfOrEpub {
  isAvailable: boolean;
  acsTokenLink?: string | null;
}
export interface SearchInfo {
  textSnippet: string;
}
export interface SearchParams {
  param: string;
  paramLabel: string;
}
