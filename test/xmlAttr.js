var assert = require('assert');
var gverify = require('../index');

var testOptions = {
    file: '<xml><js attr="test"/><css attr="test"/></xml>',
    xpaths: ['/xml/js/@attr','/xml/css/@attr']
};

describe('xmlAttr', () => {
    it('xml attribute contains value', () => {
        const result = gverify.xmlAttr('', testOptions.xpaths, 'test', testOptions);
        assert.equal(result, true);
    });

    it('xml attribute not contains value', () => {
        const result = gverify.xmlAttr('', testOptions.xpaths, 'fail', testOptions);
        assert.equal(result, false);
    });
});