export interface IMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieData {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}

export interface ICategoryItem {
  id: number;
  name: string;
}

export interface ICategoryData {
  genres: ICategoryItem[];
}

export interface IMovieVideoItem {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface IMovieVideoData {
  id: number;
  results: IMovieVideoItem[];
}
