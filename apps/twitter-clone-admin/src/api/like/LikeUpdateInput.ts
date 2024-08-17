import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  likeCreatedAt?: Date | null;
  likedBy?: string | null;
  likedTweet?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
