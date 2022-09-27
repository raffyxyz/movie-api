import axios from 'axios';
import cheerio from 'cheerio';

import { format_search } from './helpers/stringmanagement.js';
import { checkpagenum } from './helpers/pagination.js';

const BASE_URL = 'https://myflixer.to/';
const search_path = 'search/';
const movies_path = 'movie/';
const home_path = 'home';
const genre_path = 'genre/';

const genres = [
    'action',
    'action-adventure',
    'adventure',
    'animation',
    'biography',
    'comedy',
    'crime',
    'documentary',
    'drama',
    'family',
    'fantasy',
    'history',
    'horror',
    'kids',
    'music',
    'mystery',
    'news',
    'reality',
    'romance',
    'sci-fi-fantasy',
    'science-fiction',
    'soap',
    'talk',
    'thriller',
    'tv-movie',
    'war-politics',
    'western'
];

export const scrapeSearch = async ({ list = [], keyw, page = 1 }) => {
    keyw = format_search(keyw);

    try {
        const searchPage = await axios.get(
            `${BASE_URL + search_path}${keyw}?page=${page}`
        );

        const $ = cheerio.load(searchPage.data);

        $('div.film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        })

        return { totalpage: checkpagenum($), data: list };
    } catch (error) {
        console.log(error);
    }
}

export const scrapeTrendingMovies = async ({ list = [], keyw }) => {
    try {
        const searchRecent = await axios.get(
            `${BASE_URL + home_path}`
        );

        const $ = cheerio.load(searchRecent.data);

        $('#trending-movies > .film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        });

        return {
            totalpage: 0,
            data: list,
        };
    } catch (error) {
        console.log(error);
    }
}

export const scrapeTrendingTV = async ({ list = [], keyw }) => {
    try {
        const searchRecent = await axios.get(
            `${BASE_URL + home_path}`
        );

        const $ = cheerio.load(searchRecent.data);

        $('#trending-tv > .film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-item').last().text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        });

        return list;
    } catch (error) {
        console.log(error);
    }
}

export const scrapeLatestMovies = async ({ list = [], keyw }) => {
    try {
        const searchLatestMovies = await axios.get(
            `${BASE_URL + home_path}`
        );

        const $ = cheerio.load(searchLatestMovies.data);

        $('section.block_area > .film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        });

        return list.slice(0, 24);
    } catch (error) {
        console.log(error);
    }
}

export const scrapeLatestTvShows = async ({ list = [], keyw }) => {
    try {
        const searchLatestMovies = await axios.get(
            `${BASE_URL + home_path}`
        );

        const $ = cheerio.load(searchLatestMovies.data);

        $('section.block_area > .film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        });

        return list.slice(24, 48);
    } catch (error) {
        console.log(error);
    }
}

export const scrapeComingSoon = async ({ list = [], keyw }) => {
    try {
        const searchLatestMovies = await axios.get(
            `${BASE_URL + home_path}`
        );

        const $ = cheerio.load(searchLatestMovies.data);

        $('section.block_area > .film_list > .film_list-wrap > .flw-item').each((i, el) => {
            list.push({
                name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                poster: $(el).find('div.film-poster > img').attr('data-src'),
                link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
            });
        });

        return list.slice(48, 72);
    } catch (error) {
        console.log(error);
    }
}

export const scrapeByGenre = async ({ list = [], genre, page = 1 }) => {
    try {
        if (genres.indexOf(genre) > -1) {
            const searchByGenre = await axios.get(
                `${BASE_URL + genre_path}${genre}?page=${page}`
            );

            const $ = cheerio.load(searchByGenre.data);

            $('div.film_list > .film_list-wrap > .flw-item').each((i, el) => {
                list.push({
                    name: $(el).find('div.film-detail > .film-name > a').attr('title'),
                    poster: $(el).find('div.film-poster > img').attr('data-src'),
                    link: $(el).find('div.film-detail > .film-name > a').attr('href').split('/')[2],
                    quality: $(el).find('div.film-poster > .film-poster-quality').text(),
                    year: $(el).find('div.film-detail > .fd-infor > .fdi-item').first().text(),
                    duration: $(el).find('div.film-detail > .fd-infor > .fdi-duration').text(),
                    type: $(el).find('div.film-detail > .fd-infor > .fdi-type').text(),
                });
            });

            return { totalpage: checkpagenum($), data: list };
        }
        return { error: 'Genre Not Found' };
    } catch (error) {
        console.log(error);
    }
}