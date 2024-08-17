import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";

export type FollowerUpdateInput = {
  followed?: string | null;
  followedUser?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followerCreatedAt?: Date | null;
  followerUser?: string | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
};
