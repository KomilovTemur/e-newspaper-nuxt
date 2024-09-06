export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { baseUrl, apiKey } = useRuntimeConfig();
  const response = await $fetch(baseUrl + "/top-headlines", {
    method: "GET",
    params: {
      category: body.category,
      apiKey,
    },
  });

  return { status: true, response };
});
