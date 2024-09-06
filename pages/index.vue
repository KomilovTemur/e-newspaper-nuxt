<script setup>
useSeoMeta({
  title: "KNWS News website",
  ogImage: "/favicon.ico",
  ogTitle: "KNWS",
  description: "e-newspaper app using nuxtjs",
  ogDescription: "e-newspaper app using nuxtjs",
  author: "Temur Komilov (https://t.me/timcoder)",
});

import { useSiteStore } from "~/stores/site";

const site = useSiteStore();

const searchHandler = async (event) => {
  const inputValue = event.target.value;
  if (inputValue != "") {
    site.search(inputValue);
    return;
  }
  site.getAllNews();
};

watch(
  () => site.category,
  () => {
    site.searchWithCategory(site.category);
  }
);
</script>
<template>
  <UContainer>
    <div class="flex items-center justify-between my-4">
      <nuxt-link to="/" @click="site.getAllNews()">
        <h2 class="font-bold text-3xl">KNWS</h2>
      </nuxt-link>
      <UInput
        v-on:keyup.enter="searchHandler($event)"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        color="primary"
        :trailing="false"
        placeholder="Search..."
      />
    </div>
    <USelect v-model="site.category" :options="site.categories" />
    <UProgress v-if="site.loading" class="my-8" animation="carousel" />
    <AllNews />
  </UContainer>
</template>
