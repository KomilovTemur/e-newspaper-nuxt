<script setup>
defineProps({
  urlToImage: String,
  title: String,
  description: String,
  url: String,
  source: Object,
  author: String,
  publishedAt: String,
});
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes} ${day}.${month}.${year}`;
};
</script>
<template>
  <div>
    <UCard class="my-8">
      <div class="flex flex-col">
        <div class="flex flex-col gap-10 md:flex-row">
          <img
            v-if="urlToImage"
            :src="urlToImage"
            class="rounded-md md:w-2/4 xs:w-full"
            :alt="title"
          />
          <div>
            <div class="font-bold mb-4">
              {{ title }}
            </div>
            <div class="flex flex-col" v-if="description">
              {{ description }}
              <nuxt-link
                class="mt-4 font-semibold text-green-400 transition-all hover:text-green-500"
                :to="url"
                target="_blank"
              >
                Read more
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          v-if="url"
          :class="description != null ? 'mt-8 text-right' : 'text-center'"
          class="font-semibold text-green-400 transition-all hover:text-green-500"
        >
          <nuxt-link :to="url" target="_blank">
            {{ source.name }}
          </nuxt-link>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center justify-between">
          <p>{{ author }}</p>
          <p>{{ formatDate(publishedAt) }}</p>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped></style>
