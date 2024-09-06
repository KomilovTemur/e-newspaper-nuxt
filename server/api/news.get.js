export default defineEventHandler(async (event) => {
  const { baseUrl, apiKey } = useRuntimeConfig();

  const response = await $fetch(baseUrl + "/top-headlines", {
    method: "GET",
    params: {
      country: "us",
      apiKey,
    },
  });
  return { status: true, response };
});
