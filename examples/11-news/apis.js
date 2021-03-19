// Register API Key here for more requests & APIs: https://newsapi.org
const API_KEY = "ce52845d6e754123b3ecf9f68006b846";

export async function getNews(page = 1, pageSize = 10) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    return jsonData.articles || [];
  } catch (error) {
    return [];
  }
}
