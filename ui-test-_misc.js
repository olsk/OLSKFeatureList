const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFeatureList_Misc', function () {

	const [name, blurb, image_url, className] = [Math.random().toString(), Math.random().toString(), Math.random().toString(), Math.random().toString()];

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKFeatureListData: JSON.stringify([[name, blurb, image_url, className]]),
		});
	});

	describe('OLSKFeatureListItem', function test_OLSKFeatureListItem () {
		
		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(OLSKFeatureListItem, 'OLSKCommonCard');
		});

		it('classes OLSKCommonFeatureCard', function () {
			browser.assert.hasClass(OLSKFeatureListItem, 'OLSKCommonFeatureCard');
		});

		it('classes className', function () {
			browser.assert.hasClass(OLSKFeatureListItem, className);
		});

	});

	describe('OLSKFeatureListItemIcon', function test_OLSKFeatureListItemIcon () {
		
		it('sets src', function () {
			browser.assert.attribute(OLSKFeatureListItemIcon, 'src', image_url);
		});
		
		it('sets role', function () {
			browser.assert.attribute(OLSKFeatureListItemIcon, 'role', 'presentation');
		});

	});

	describe('OLSKFeatureListItemName', function test_OLSKFeatureListItemName () {
		
		it('binds name', function () {
			browser.assert.text(OLSKFeatureListItemName, name);
		});
		
	});

	describe('OLSKFeatureListItemBlurb', function test_OLSKFeatureListItemBlurb () {
		
		it('binds blurb', function () {
			browser.assert.text(OLSKFeatureListItemBlurb, blurb);
		});
		
	});

});
