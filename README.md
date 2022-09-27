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
myflixer-video-api/search?keyw=SearchTerm
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
myflixer-video-api/trending-movies
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
myflixer-video-api/trending-tv
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
myflixer-video-api/latest-movies
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
myflixer-video-api/latest-tv
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
myflixer-video-api/coming-movies
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
```sh
myflixer-video-api/genre/action?page=1
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

## Development
### Routes that in development
1. getDownloadLink
2. getStreamingUrlByProvider
4. getMoviesByCountry

Im working hard to publish this feature soon :).
