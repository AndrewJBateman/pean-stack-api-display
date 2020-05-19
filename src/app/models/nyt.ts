// format of Nyt API response
export interface NytApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    newest_published_date: Date;
    oldest_published_date: Date;
    updated: string;
  }
}
