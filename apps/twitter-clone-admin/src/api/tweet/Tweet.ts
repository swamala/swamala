import { Like } from "../like/Like";

export type Tweet = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  likesCount: number | null;
  numberOfLikes: number | null;
  tweetAuthor: string | null;
  tweetAuthorRelation: string | null;
  tweetContent: string | null;
  tweetCreatedAt: Date | null;
  tweetLikesCount: number | null;
  tweetTimestamp: Date | null;
  updatedAt: Date;
};
