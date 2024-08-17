import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TweetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tweets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="likesCount" source="likesCount" />
        <TextField label="numberOfLikes" source="numberOfLikes" />
        <TextField label="tweetAuthor" source="tweetAuthor" />
        <TextField label="tweetAuthorRelation" source="tweetAuthorRelation" />
        <TextField label="tweetContent" source="tweetContent" />
        <TextField label="tweetCreatedAt" source="tweetCreatedAt" />
        <TextField label="tweetLikesCount" source="tweetLikesCount" />
        <TextField label="tweetTimestamp" source="tweetTimestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
