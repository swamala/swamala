import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FollowerListRelationFilter } from "./FollowerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowerWhereInput = {
  followed?: StringNullableFilter;
  followedUser?: StringNullableFilter;
  follower?: FollowerWhereUniqueInput;
  followerCreatedAt?: DateTimeNullableFilter;
  followerUser?: StringNullableFilter;
  followers?: FollowerListRelationFilter;
  id?: StringFilter;
};
