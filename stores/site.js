// stores/site.js
import { defineStore } from "pinia";

export const useSiteStore = defineStore("site", {
  state: () => ({
    loading: false,
    news: null,
    categories: [
      "general",
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ],
    category: "general",
  }),
  actions: {
    setLoading(payload) {
      this.loading = payload;
    },
    setNews(payload) {
      this.news = payload;
    },
    async getAllNews() {
      this.setLoading(true);
      try {
        const { data } = await useFetch("/api/news");
        this.setNews(data.value.response.articles);
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async search(payload) {
      this.setLoading(true);
      try {
        const data = await $fetch("/api/search", {
          method: "POST",
          body: {
            search: payload,
          },
        });

        this.setNews(data.response.articles);
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async searchWithCategory(payload) {
      this.setLoading(true);
      try {
        const data = await $fetch("/api/search-with-category", {
          method: "POST",
          body: {
            category: payload,
          },
        });

        this.setNews(data.response.articles);
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
  },
  getters: {
    // your getters
  },
});
