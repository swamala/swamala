import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  likesCount?: number | null;
  numberOfLikes?: number | null;
  tweetAuthor?: string | null;
  tweetAuthorRelation?: string | null;
  tweetContent?: string | null;
  tweetCreatedAt?: Date | null;
  tweetLikesCount?: number | null;
  tweetTimestamp?: Date | null;
};
