import express from 'express';
import config from './config';
import router from './routes/router';

const { APP_NAME, PORT, SITE_URL } = config
const app = express();

export const setupAPI = () => {
    app.get('/', (req, res) => {
        res.send(`Welcome to ${APP_NAME}`)
    })

    app.use('/', router)
}

export const startAPI = () => {
    app.listen(PORT, () => {
        console.log(`${APP_NAME} is listening to port: ${PORT}`)
        console.log(`Link: ${ SITE_URL }:${PORT}`)
    })
}   
