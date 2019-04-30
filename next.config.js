const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = withCSS(withSass({

    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about', title: 'About' },
            '/fetch-data': { page: '/fetch_data', title: 'Fetch Data' },
            '/p': { page: '/post', title: 'Fetch Data Detail' },
        }
    },
    webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]

        return config
    },
    webpack(cfg) {
        process.env.BABEL_ENV = cfg.name

        return cfg;
    }

}))