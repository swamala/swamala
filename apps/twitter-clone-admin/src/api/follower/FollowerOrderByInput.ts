import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followed?: SortOrder;
  followedUser?: SortOrder;
  followerId?: SortOrder;
  followerCreatedAt?: SortOrder;
  followerUser?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
