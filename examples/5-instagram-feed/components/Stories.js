import React from "react";
import { ScrollView } from "react-native";
import Story from "./Story";
import { profile, stories } from "../data";

export default function Stories() {
  return (
    // https://reactnative.dev/docs/scrollview
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Story name="Tin của bạn" avatar={profile.avatar} isCreateStory={true} />

      {stories.map((story) => (
        <Story
          key={story.id.toString()}
          name={story.name}
          avatar={story.avatar}
          isSeen={story.isSeen}
        />
      ))}
    </ScrollView>
  );
}
