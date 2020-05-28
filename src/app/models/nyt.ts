// format of Nyt API response
export interface NytApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    bestsellers_date: Date;
    lists: {
      books: {
        age_group: string;
        amazon_product_url: string;
        article_chapter_link: string;
        author: string;
        book_image: string;
        book_image_height: number;
        book_image_width: number;
        book_review_link: string;
        book_uri: string;
      };
      display_name: string;
      list_id: number;
      list_image: string;
      list_image_height: number;
      list_image_width: string;
      list_name: string;
      list_name_encoded: string;
      updated: string;
    };
    next_published_date: string;
    previous_published_date: string;
    published_date: Date;
    published_date_description: string;
  };
}

export interface Book {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
}
