import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Article({ item }) {
  const openLink = () => {
    const url = item.url;

    // https://reactnative.dev/docs/linking
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Broken Link!");
      }
    });
  };

  const publishedFromNow = formatDistanceToNow(new Date(item.publishedAt));

  return (
    <View style={styles.article}>
      {/* Caching image for better performance: https://github.com/DylanVann/react-native-fast-image */}
      <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={openLink}>
          <Text style={styles.articleTitle} numberOfLines={3}>
            {item.title}
          </Text>
        </TouchableOpacity>

        <Text style={styles.articlePublishedAt}>{publishedFromNow}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  articleImage: {
    width: 150,
    height: 85,
    resizeMode: "contain",
    marginRight: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  articlePublishedAt: {
    fontSize: 14,
  },
});
