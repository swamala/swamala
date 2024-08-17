import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FOLLOWER_TITLE_FIELD } from "./FollowerTitle";

export const FollowerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Follower"
          target="followerId"
          label="Followers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
