export interface IPaintingWithId {
  id: number;
  imageUrl: string;
  name: string;
  created: string;
  authorId: number;
  locationId: number;
}

export interface IPaintingWithoutId {
  id: number;
  imageUrl: string;
  name: string;
  created: string;
  author: string;
  location: string;
}
