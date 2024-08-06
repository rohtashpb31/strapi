'use strict';

/**
 * registered-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::registered-data.registered-data');
