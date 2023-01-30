'use strict';

/**
 * why-halogen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-halogen.why-halogen');
