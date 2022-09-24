# movie-api
### A free movie streaming restful API serving [myflixer.to](https://myflixer.to) 

## Table of contents

- [Usage](#usage)

- [Routes](#routes)

- [Development](#development)

- [Contribution](#contribution)

## Usage
### Use the deployed api
```sh
    https://myflixer-movie-api.cyclic.app/routes
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
  myflixer-movie-api/search?keyw=SearchTerm
```
Output >>>
```json
[
    {
      "name": "",
      "poster": "",
    }
]
```
