export const getImageUrl = (path) => {
    if (!path) {
        console.error("Path is undefined! Please provide a valid path.");
        return "";
    }
    return new URL(`./assets/${path}`, import.meta.url).href;
};
