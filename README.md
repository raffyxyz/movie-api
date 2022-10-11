# movie-api
### A free api that scrapes movie data from [myflixer.to](https://myflixer.to)

## Table of contents

- [Usage](#usage)

- [Routes](#routes)

- [Development](#development)

## Usage
### Use the deployed api
```sh
https://myflixer-video-api.cyclic.app/
```
### Or clone the repository so you can host it locally or deploy it for personal use.
```sh
git clone https://github.com/raffyamoguis/movie-api.git
npm install
npm start || npm run dev
```

## Routes
### Search Movie
```sh
https://myflixer-video-api.cyclic.app/search?keyw=SearchTerm
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```
### Get Trending movies
```sh
https://myflixer-video-api.cyclic.app/trending-movies
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```
### Get Trending tv shows
```sh
https://myflixer-video-api.cyclic.app/trending-tv
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```

### Get Latest Movies
```sh
https://myflixer-video-api.cyclic.app/latest-movies
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```
### Get Latest TV Shows
```sh
https://myflixer-video-api.cyclic.app/latest-tv
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```
### Get Coming Soon Movies
```sh
https://myflixer-video-api.cyclic.app/coming-movies
```
Output >>>
```json
[
    {
        "name": "",
        "poster": "",
        "link": "",
        "quality": "",
        "year": "",
        "duration": "",
        "type": ""
    }
]
```
### Get Movies By Genre
-Page query is optional if the result have more than one page.
```sh
https://myflixer-video-api.cyclic.app/genre/:genre?page=1
```
Output >>>
```json
[
    "totalpage": (int)total pagination number,
    "data": [
        {
            "name": "",
            "poster": "",
            "link": "",
            "quality": "",
            "year": "",
            "duration": "",
            "type": ""
        }
    ]
]
```
### Get Movies By Country
-Page query is optional if the result have more than one page.
```sh
https://myflixer-video-api.cyclic.app/country/:country?page=1
```
Output >>>
```json
{
    "country": "Australia",
    "totalpage": 31,
    "data": [
        {
            "name": "Sissy",
            "poster": "https://img.myflixer.to/xxrz/250x400/201/e8/27/e827945c9134a698a992da69549317d0/e827945c9134a698a992da69549317d0.jpg",
            "link": "sissy-88678",
            "quality": "HD",
            "year": "2022",
            "duration": "102m",
            "type": "Movie"
        },
    ],
}
```
### Get Movies Info
```sh
https://myflixer-video-api.cyclic.app/movie/:moviename
```
Output >>>
```json
{
    "name": "",
    "poster": "",
    "imdb": "",
    "plot": "",
    "released": "",
    "genre": "",
    "casts": "",
    "duration": "",
    "country": "",
    "production": ""
}
```
### Get TvShow Info
```sh
https://myflixer-video-api.cyclic.app/tv/:tvshowname
```
Output >>>
```json
{
    "name": "",
    "poster": "",
    "imdb": "",
    "plot": "",
    "released": "",
    "genre": "",
    "casts": "",
    "duration": "",
    "country": "",
    "production": ""
}
```

## Development
### Routes that in development
1. getDownloadLink
2. getStreamingUrlByProvider

Im working hard to publish this feature soon :)
