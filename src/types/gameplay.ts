import type { ImageSourcePropType } from 'react-native';

export const PLACES_IDS = [
  'Viewpoints',
  'Old Town',
  'Lake & Waterfront',
  'Cafés & Food',
] as const;

export type PlacesCategoriesKeysType = (typeof PLACES_IDS)[number];

export type PlacesCategoriesType = Record<
  PlacesCategoriesKeysType,
  PlaceType[]
>;

export type PlaceType = {
  id: string;
  number: number;
  title: string;
  description: string;
  fact: string;
  adress: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: ImageSourcePropType;
  isFavorite: boolean;
};

export type QuizType = {
  id: number;
  question: string;
  hint: string;
  options: string[];
  correctValue: string;
};
