export interface ApiConfiguration {
  change_keys: Array<string>;
  images: ImagesConfiguration;
}

interface ImagesConfiguration {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: Array<Size>;
  logo_sizes: Array<Size>;
  poster_sizes: Array<Size>;
  profile_sizes: Array<Size>;
  still_sizes: Array<Size>;
}

export type Size = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w342' | 'w500' | 'w780' | 'original';
