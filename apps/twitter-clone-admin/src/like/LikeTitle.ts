import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "likedBy";

export const LikeTitle = (record: TLike): string => {
  return record.likedBy?.toString() || String(record.id);
};
