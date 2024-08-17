import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FOLLOWER_TITLE_FIELD } from "./FollowerTitle";

export const FollowerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Followers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="followed" source="followed" />
        <TextField label="followedUser" source="followedUser" />
        <ReferenceField
          label="follower"
          source="follower.id"
          reference="Follower"
        >
          <TextField source={FOLLOWER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="followerCreatedAt" source="followerCreatedAt" />
        <TextField label="followerUser" source="followerUser" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
