'use strict';

/**
 * result router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::result.result', {
  config: {
    update: {
			// FIXME почему не работает?
      policies: [
        // point to a registered policy
        'my-policy',

        // point to a registered policy with some custom configuration
        //{ name: 'policy-name', config: {} },

        // pass a policy implementation directly
        (policyContext, config, { strapi }) => {
					console.log(policyContext)
					console.log(config)
          return true;
        },
      ]
    }
  }
});
