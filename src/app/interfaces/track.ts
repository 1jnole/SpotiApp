import {Image} from './image';
import {Artist} from './artist';

export interface Track {
  id: string;
  name: string;
  album_type: string;
  release_date: string;
  release_date_precision: string;
  images: Image[];
  artists: Artist[];
}
