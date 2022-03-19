'use strict';

/**
 *  result controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::result.result');

/*
module.exports = createCoreController('api::result.result', {
	update(ctx) {
		// FIXME почему не работает?
		console.log(ctx)
	}
});
*/
/*
module.exports = createCoreController('api::result.result', ({ strapi }) =>  ({
	async update(ctx) {
		// some logic here
		const response = await super.update(ctx);
		// some more logic
		// FIXME почему не работает?
		console.log(ctx)

		return response;
	}
}));
*/