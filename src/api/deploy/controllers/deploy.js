'use strict';

/**
 * deploy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::deploy.deploy');
