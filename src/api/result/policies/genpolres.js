'use strict';

/**
 * `genpolres` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In genpolres policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
