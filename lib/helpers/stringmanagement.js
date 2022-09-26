export const format_search = (search) => {
    search = search.replace(/ /g, "-");
    return search.toLowerCase();
} 