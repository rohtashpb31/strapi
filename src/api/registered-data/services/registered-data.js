'use strict';

/**
 * registered-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registered-data.registered-data');
