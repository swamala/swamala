export type Follower = {
  createdAt: Date;
  followed: string | null;
  followedUser: string | null;
  follower?: Follower | null;
  followerCreatedAt: Date | null;
  followerUser: string | null;
  followers?: Array<Follower>;
  id: string;
  updatedAt: Date;
};
