import express from 'express';
import cors from 'cors';
import axios from 'axios';

import {
    scrapeSearch,
    scrapeTrendingMovies,
    scrapeTrendingTV,
    scrapeLatestMovies,
    scrapeLatestTvShows,
    scrapeComingSoon
} from './movie_parser.js';

const port = process.env.PORT || 3010;

const corsOptions = {
    origin: '*',
    credentails: true,
    optionSuccessStatus: 200,
    port: port,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Welcome');
});

app.get('/search', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeSearch({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/trendingmovies', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeTrendingMovies({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/trendingtv', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeTrendingTV({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/latest-movies', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeLatestMovies({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/latest-tv', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeLatestTvShows({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/coming-soon', async (req, res) => {
    try {
        const keyw = req.query.keyw;

        const data = await scrapeComingSoon({ keyw: keyw });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: 'Not Found',
    });
});

app.listen(port, () => {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});