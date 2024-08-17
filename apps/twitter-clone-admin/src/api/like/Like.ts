import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  likeCreatedAt: Date | null;
  likedBy: string | null;
  likedTweet: string | null;
  tweet?: Tweet | null;
  updatedAt: Date;
  user?: User | null;
};
