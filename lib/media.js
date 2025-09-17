import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media || {};
  if (!url) {
    return "";
  }
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
