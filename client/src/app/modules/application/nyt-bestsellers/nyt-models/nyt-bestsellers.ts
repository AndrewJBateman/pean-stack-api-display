// format of Nyt Bestseller API response
export interface Books {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    bestsellers_date: Date;
    lists: List[];
    next_published_date: string;
    previous_published_date: Date;
    published_date: Date;
    published_date_description: string;
  };
}

export interface List {
  books: Book[];
  display_name: string;
  list_id: number;
  list_image: string;
  list_image_height: number;
  list_image_width: number;
  list_name: string;
  list_name_encoded: string;
  updated: string;
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
  buy_links: Link[];
  contributor: string;
  contributor_note: string;
  created_date: Date;
  description: string;
  first_chapter_link: string;
  price: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: string;
  weeks_on_list: number;
}

export interface Link {
  name: string;
  url: string;
}
