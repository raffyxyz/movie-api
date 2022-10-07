export const format_search = (search) => {
    search = search.replace(/ /g, "-");
    return search.toLowerCase();
}

//An escape hatch to parse the daya with same classes :)
export const parse_movie_info = (str_year, idx, str_del) => {
    str_year = format_string(str_year);
    str_year = str_year.split(':')[idx];
    str_year = str_year.replace(str_del, '');
    return format_string(str_year);
}

export const format_string = (str) => {
    str = str.replace(/[\r\n]/gm, '');
    return str.replace(/\s+/g, ' ').trim();
}