<script setup>
import { useSiteStore } from "~/stores/site";

const site = useSiteStore();

site.getAllNews();
</script>

<template>
  <div
    v-if="site.news"
    v-for="{
      urlToImage,
      title,
      description,
      url,
      source,
      author,
      publishedAt,
    } in site.news"
  >
    <Card
      v-if="title != '[Removed]'"
      :urlToImage="urlToImage"
      :title="title"
      :description="description"
      :url="url"
      :source="source"
      :author="author"
      :publishedAt="publishedAt"
    />
  </div>
</template>
