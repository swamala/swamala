import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  likeCreatedAt?: DateTimeNullableFilter;
  likedBy?: StringNullableFilter;
  likedTweet?: StringNullableFilter;
  tweet?: TweetWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
