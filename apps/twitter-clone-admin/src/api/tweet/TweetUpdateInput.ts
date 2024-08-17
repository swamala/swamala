import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  likesCount?: number | null;
  numberOfLikes?: number | null;
  tweetAuthor?: string | null;
  tweetAuthorRelation?: string | null;
  tweetContent?: string | null;
  tweetCreatedAt?: Date | null;
  tweetLikesCount?: number | null;
  tweetTimestamp?: Date | null;
};
