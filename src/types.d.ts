export interface MovieProps {
   adult: boolean;
   backdrop_path: string;
   genres?: GenresType
   genre_ids: Array<number>;
   id: number;
   media_type?: string
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   runtime: number
   status?: string;
   title?: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
   name?: string;
   tagline: string;
}

export interface DataProps {
   page: number;
   results: Array<MovieProps>;
   total_pages: number;
   total_results: number;
}

export type GenresType = Array<{
   id: number;
   name: string;
}>;

export interface GenresProps {
   genres: GenresType;
}

export interface Genres {
   movie: GenresType;
   tv: GenresType;
}

export interface CastProps {
   adult: boolean;
   gender: number;
   id: number;
   know_for_department: string;
   name: string;
   original_name: string;
   popularity: number;
   profile_path: string;
   cast_id?: number;
   character: string;
   credit_id: string;
   department?: string;
   job?: string;
   order: 0;
}

export interface CreditsProps {
   id: number;
   cast: Array<CastProps>;
   crew: Array<CastProps>;
}

export interface VideoProps {
   iso_639_1: string;
   iso_3166_1: string;
   name: string;
   key: string;
   site: string;
   size: number;
   type: string;
   official: boolean;
   published_at: string;
   id: string;
}

export interface DataVideoProps {
   id: number;
   results: Array<VideosProps>;
}


