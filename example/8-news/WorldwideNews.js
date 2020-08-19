import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import { getNews } from "./apis";
import Article from "./Article";

const PAGE_SIZE = 20;

export default function WorldwideNews() {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setMoreData] = useState(true);

  const fetchData = async () => {
    if (!hasMoreData) return;

    const newArticles = await getNews(page, PAGE_SIZE);

    setArticles((previousNews) => previousNews.concat(newArticles));
    setPage(page + 1);
    setLoading(false);

    if (newArticles.length < PAGE_SIZE) {
      setMoreData(false);
    }
  };

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    fetchData();
  }, []);

  const renderArticle = ({ item }) => <Article item={item} />;
  const renderDivider = () => <View style={styles.articleSeparator}></View>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headlines}>Worldwide News</Text>

        {isLoading ? (
          <View style={styles.center}>
            {/* https://reactnative.dev/docs/activityindicator */}
            <ActivityIndicator size="large" color="#e74c3c" />
          </View>
        ) : (
          // Optimizing FlatList: https://reactnative.dev/docs/optimizing-flatlist-configuration
          <FlatList
            data={articles}
            renderItem={renderArticle}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderDivider}
            ListFooterComponent={() => (
              <View style={styles.center}>
                {hasMoreData && <ActivityIndicator color="#e74c3c" />}
              </View>
            )}
            initialNumToRender={6}
            onEndReached={fetchData}
            onEndReachedThreshold={1}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headlines: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 50,
    color: "#e74c3c",
  },
  articleSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ed7669",
  },
});
