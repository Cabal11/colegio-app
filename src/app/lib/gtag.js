export const ID_G = "G-2T0GPVTL7Q";

export const pageview = (url) => {
    window.gtag('config', ID_G, {
        page_path: url,
    })
}