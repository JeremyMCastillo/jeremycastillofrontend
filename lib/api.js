import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

function buildQuery(query, populate) {
  let queryString = "";
  let index = 0;
  for (var i = 0; populate && i < populate.length; i++) {
    queryString += `${query}[${index}]=${populate[i]}&`;
    index++;
  }

  return queryString.slice(0, -1);
}

function buildFilters(filters) {
  let queryString = "";
  for (var key in filters) {
    queryString += `filters[${key}][$eq]=${filters[key]}&`;
  }
  return queryString.slice(0, -1);
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    ...options,
  };

  if (options && options.body) {
    mergedOptions.headers["Authorization"] =
      `Bearer ${process.env.COMMENT_TOKEN}`;
  }

  // Build request URL
  const populateString = buildQuery("populate", urlParamsObject.populate);
  const populate = populateString ? `${populateString}` : "populate=*";
  const selectString = buildQuery("fields", urlParamsObject.fields);
  const select = selectString ? `&${selectString}` : "";
  const filtersString = buildFilters(urlParamsObject.filters);
  const filters = filtersString ? `&${filtersString}` : "";
  const sortString = urlParamsObject.sort
    ? `&sort=${urlParamsObject.sort}`
    : "";
  const requestUrl = `${getStrapiURL(`/api${path}?${populate}${filters}`)}${sortString}${select}`;
  // Trigger API call
  try {
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
