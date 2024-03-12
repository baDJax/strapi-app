'use strict';

/**
 * user-input service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-input.user-input');
