import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";

export type FollowerCreateInput = {
  followed?: string | null;
  followedUser?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followerCreatedAt?: Date | null;
  followerUser?: string | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
};
