'use strict';

/**
 * deploy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::deploy.deploy');
