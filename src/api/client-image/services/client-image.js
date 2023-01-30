'use strict';

/**
 * client-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-image.client-image');
