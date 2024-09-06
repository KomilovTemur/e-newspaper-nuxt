export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { baseUrl, apiKey } = useRuntimeConfig();
  const response = await $fetch(baseUrl + "/everything", {
    method: "GET",
    params: {
      q: body.search,
      sortBy: "popularity",
      apiKey,
    },
  });

  return { status: true, response };
});
