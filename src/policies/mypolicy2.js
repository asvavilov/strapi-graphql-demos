'use strict';

/**
 * `mypolicy2` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In mypolicy2 policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
