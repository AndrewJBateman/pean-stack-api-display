// format of news API response array
export interface SourcesResponse {
	status: 'ok';
	sources: [
		{
			id: string,
			name: string,
			description: string,
			url: string,
			category: string,
			language: string,
			country: string
		}
	]
}

export interface NewsApiResponse {
	status: string;
	totalResults: number;
	articles: Article[];
}

// format of each Article array in the API response
export interface Article {
	source: Source;
	author?: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content?: string;
}

// format of the article array news source
export interface Source {
  id?: string;
  name: string;
}