import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likesCount?: SortOrder;
  numberOfLikes?: SortOrder;
  tweetAuthor?: SortOrder;
  tweetAuthorRelation?: SortOrder;
  tweetContent?: SortOrder;
  tweetCreatedAt?: SortOrder;
  tweetLikesCount?: SortOrder;
  tweetTimestamp?: SortOrder;
  updatedAt?: SortOrder;
};
