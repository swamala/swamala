import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  likesCount?: IntNullableFilter;
  numberOfLikes?: IntNullableFilter;
  tweetAuthor?: StringNullableFilter;
  tweetAuthorRelation?: StringNullableFilter;
  tweetContent?: StringNullableFilter;
  tweetCreatedAt?: DateTimeNullableFilter;
  tweetLikesCount?: IntNullableFilter;
  tweetTimestamp?: DateTimeNullableFilter;
};
