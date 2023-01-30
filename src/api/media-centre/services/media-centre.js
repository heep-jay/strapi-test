'use strict';

/**
 * media-centre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::media-centre.media-centre');
