
export const checkpagenum = ($, pagenum) => {
    $('div.pre-pagination > nav > .pagination > .page-item').each((i, el) => {
        pagenum = $(el).find('a[title=Last]').first().attr('href');
    });

    return parseInt(pagenum.match(/\d+/g));
} 