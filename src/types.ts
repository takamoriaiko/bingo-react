export interface Card {
  id: number;
  name: string;
  image_url: string;
}

export type Route = "index" | "admin" | "play" | "screen";

export interface User {
  displayName: string | null;
  uid: string;
  isAnonymous?: boolean;
}
