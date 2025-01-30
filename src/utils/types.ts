export type MovieType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultsType[];
};
export type ResultsType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenreType = {
  name: string;
  id: number;
  total_results: string;
  results: GenresType[];
  genres: [];
  genre_ids: [];
};
export type GenresType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type OneMovieType = {
  runtime: number;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  id: number;
  poster_path: string;
  backdrop_path: string;
};
export type SimilarMovieType = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
};
export type CrewType = {
  known_for_department: string;
  name: string;
  job: string;
};
export type CastType = {
  name: string;
};

export type TrailerType = {
  key: string;
};
