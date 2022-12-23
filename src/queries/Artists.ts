import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
} from "@firebase/firestore";
import { firestore } from "../../firestore";

export interface ArtistProps {
  name: string;
  rating: number;
  followers: number;
  email?: string;
  bio?: string;
  socials?: string[];
  location?: string;
  profilePic?: string;
}

const artistsCollection = collection(firestore, "artists");

export const getArtists = async () => {
  const todosQuery = query(artistsCollection, limit(10));

  const querySnapshot = await getDocs(todosQuery);

  const result: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snapshot) => {
    result.push(snapshot);
  });

  return result;
};
