const DEFAULT = {
    APP_NAME: 'Expresso API',
    PORT: 5000,
    SITE_URL: "http://127.0.0.1",
}

export default {
    APP_NAME: process.env.APP_NAME || DEFAULT.APP_NAME,
    PORT: process.env.PORT || DEFAULT.PORT,
    SITE_URL: process.env.SITE_URL || DEFAULT.SITE_URL
}
