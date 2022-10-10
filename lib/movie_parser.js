import axios from 'axios';
import cheerio from 'cheerio';

import { format_search, parse_movie_info, format_string } from './helpers/stringmanagement.js';
import { checkpagenum } from './helpers/pagination.js';

const BASE_URL = 'https://myflixer.to/';
const search_path = 'search/';
const movie_path = 'movie/';
const home_path = 'home';
const genre_path = 'genre/';
const country_path = 'country/';

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

const countries = [
    "AR",
    "AU",
    "AT",
    "BE",
    "BR",
    "CA",
    "CZ",
    "DK",
    "FI",
    "FR",
    "DE",
    "HK",
    "HU",
    "IN",
    "IE",
    "IL",
    "IT",
    "JP",
    "LU",
    "MX",
    "NL",
    "NZ",
    "NO",
    "PL",
    "RO",
    "RU",
    "ZA",
    "KR",
    "ES",
    "SE",
    "CH",
    "TW",
    "TH",
    "GB",
    "US",
]

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

        return list;
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

export const scrapeByCountry = async ({ list = [], country, page = 1 }) => {
    try {
        if (countries.indexOf(country) > -1) {
            const searchByCountry = await axios.get(
                `${BASE_URL + country_path}${country}?page=${page}`
            );

            const $ = cheerio.load(searchByCountry.data);

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

            return { country: $('h2.cat-heading').text(), totalpage: checkpagenum($), data: list };
        }
        return { error: 'Genre Not Found' };
    } catch (error) {
        console.log(error);
    }
}

export const scrapeMovie = async ({ list, movie }) => {
    try {
        const searchMovie = await axios.get(
            `${BASE_URL + movie_path}${movie}`
        );

        const $ = cheerio.load(searchMovie.data);

        $('div.detail_page-watch > .detail_page-infor > .dp-i-content').each((i, el) => {
            const plot_data = $(el).find('div.dp-i-c-right > .description').text();
            const content_right = $(el).find('div.dp-i-c-right > .elements > .row > .col-sm-12 > .row-line').text();
            list = {
                name: $(el).find('div.dp-i-c-right > .heading-name > a').text(),
                poster: $(el).find('div.dp-i-c-poster > .film-poster > img').attr('src'),
                imdb: $(el).find('div.dp-i-c-right > .dp-i-stats > .mr-2 > button').text(),
                plot: format_string(plot_data),
                released: parse_movie_info(content_right, 1, "Genre"),
                genre: parse_movie_info(content_right, 2, "Casts"),
                casts: parse_movie_info(content_right, 3, "Duration"),
                duration: parse_movie_info(content_right, 4, "Country"),
                country: parse_movie_info(content_right, 5, "Production"),
                production: parse_movie_info(content_right, 6, ""),
            };
        });

        return list;
    } catch (error) {
        console.log(error);
    }
}

export const scrapeTvShow = async ({ list, movie }) => {
    try {
        const searchMovie = await axios.get(
            `${BASE_URL + movie_path}${movie}`
        );

        const $ = cheerio.load(searchMovie.data);

        $('div.detail_page-watch > .detail_page-infor > .dp-i-content').each((i, el) => {
            const plot_data = $(el).find('div.dp-i-c-right > .description').text();
            const content_right = $(el).find('div.dp-i-c-right > .elements > .row > .col-sm-12 > .row-line').text();
            list = {
                name: $(el).find('div.dp-i-c-right > .heading-name > a').text(),
                poster: $(el).find('div.dp-i-c-poster > .film-poster > img').attr('src'),
                imdb: $(el).find('div.dp-i-c-right > .dp-i-stats > .mr-2 > button').text(),
                plot: format_string(plot_data),
                released: parse_movie_info(content_right, 1, "Genre"),
                genre: parse_movie_info(content_right, 2, "Casts"),
                casts: parse_movie_info(content_right, 3, "Duration"),
                duration: parse_movie_info(content_right, 4, "Country"),
                country: parse_movie_info(content_right, 5, "Production"),
                production: parse_movie_info(content_right, 6, ""),
            };
        });

        return list;
    } catch (error) {
        console.log(error);
    }
}