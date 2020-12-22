exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					OLSKFeatureListData: [],
				}, Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).map(function (e) {
					if (e[0] === 'OLSKFeatureListData') {
						e[1] = JSON.parse(e[1]);
					}

					return e;
				}))));
		},
		OLSKRouteSignature: 'OLSKFeatureListStubRoute',
	}];
};
