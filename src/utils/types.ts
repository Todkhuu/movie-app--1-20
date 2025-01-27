export type MovieType = {
  poster_path: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  adult: boolean;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  genre_ids: number[];
  id: number;
  job: string;
};
export type PageType = {
  poster_path: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  adult: boolean;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  genre_ids: number[];
  id: number;
  job: string;
};
export type GenreType = {
  name: string;
  id: number;
  total_results: string;
  results: [];
  genres: [];
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
