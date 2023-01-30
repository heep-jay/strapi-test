'use strict';

/**
 * fybright service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fybright.fybright');
