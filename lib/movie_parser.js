import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://myflixer.to/';
const search_path = 'search/';
const movies_path = 'movie/';

export const scrapeSearch = async ({ list = [], keyw }) => {
    try {
        const searchPage = await axios.get(
            `${BASE_URL + search_path}${keyw}`
        );

        const $ = cheerio.load(searchPage.data);

        $('div.film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
            });
        })

        return list;
    } catch (error) {
        console.log(error);
    }
} 