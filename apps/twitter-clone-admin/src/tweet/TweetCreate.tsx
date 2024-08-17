import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="likesCount" source="likesCount" />
        <NumberInput step={1} label="numberOfLikes" source="numberOfLikes" />
        <TextInput label="tweetAuthor" source="tweetAuthor" />
        <TextInput label="tweetAuthorRelation" source="tweetAuthorRelation" />
        <TextInput label="tweetContent" multiline source="tweetContent" />
        <DateTimeInput label="tweetCreatedAt" source="tweetCreatedAt" />
        <NumberInput
          step={1}
          label="tweetLikesCount"
          source="tweetLikesCount"
        />
        <DateTimeInput label="tweetTimestamp" source="tweetTimestamp" />
      </SimpleForm>
    </Create>
  );
};
