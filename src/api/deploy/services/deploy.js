'use strict';

/**
 * deploy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deploy.deploy');
