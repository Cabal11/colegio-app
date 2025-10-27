export const GTM_ID = 'GTM-KM9PTR67';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
