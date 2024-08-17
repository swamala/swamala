import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TweetTitle } from "../tweet/TweetTitle";
import { UserTitle } from "../user/UserTitle";

export const LikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="likeCreatedAt" source="likeCreatedAt" />
        <TextInput label="likedBy" source="likedBy" />
        <TextInput label="likedTweet" source="likedTweet" />
        <ReferenceInput source="tweet.id" reference="Tweet" label="tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
