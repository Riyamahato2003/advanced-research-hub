export function seo(title: string, description: string, path?: string) {
  const url = path;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
