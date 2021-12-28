// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

]);
