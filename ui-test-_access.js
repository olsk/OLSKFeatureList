const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKFeatureList: '.OLSKFeatureList',
	
	OLSKFeatureListItem: '.OLSKFeatureListItem',
	OLSKFeatureListItemIcon: '.OLSKFeatureListItemIcon',
	OLSKFeatureListItemName: '.OLSKFeatureListItemName',
	OLSKFeatureListItemBlurb: '.OLSKFeatureListItemBlurb',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKFeatureList_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKFeatureList', function() {
		browser.assert.elements(OLSKFeatureList, 1);
	});

	it('hides OLSKFeatureListItem', function () {
		browser.assert.elements(OLSKFeatureListItem, 0);
	});

	context('OLSKFeatureListData', function () {

		const count = Math.max(1, Date.now() % 10);

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKFeatureListData: JSON.stringify(Array.from(Array(count)).map(function (e) {
					return [];
				})),
			});
		});

		it('shows OLSKFeatureListItem', function () {
			browser.assert.elements(OLSKFeatureListItem, count);
		});

		it('hides OLSKFeatureListItemIcon', function () {
			browser.assert.elements(OLSKFeatureListItemIcon, 0);
		});

		it('shows OLSKFeatureListItemName', function () {
			browser.assert.elements(OLSKFeatureListItemName, count);
		});

		it('shows OLSKFeatureListItemBlurb', function () {
			browser.assert.elements(OLSKFeatureListItemBlurb, count);
		});

		context('image_url', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKFeatureListData: JSON.stringify(Array.from(Array(count)).map(function (e) {
						return [Math.random().toString(), Math.random().toString(), Math.random().toString()];
					})),
				});
			});

			it('shows OLSKFeatureListItemIcon', function () {
				browser.assert.elements(OLSKFeatureListItemIcon, count);
			});

		});
	
	});
	
});
