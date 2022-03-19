module.exports = (policyContext, config, { strapi }) => {
	// FIXME почему не работает?
	console.log(policyContext)
	console.log(config)
	return true

	if (policyContext.state.user.role.code === config.role) { // if user's role is the same as the one described in configuration
		return true;
	}

	return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
};