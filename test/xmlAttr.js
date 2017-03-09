var assert = require('assert');
var gverify = require('../index');

var testOptions = {
    file: '<xml><file attr="test"/></xml>'
};

describe('xmlAttr', () => {
    it('xml attribute contains value', () => {
        const result = gverify.xmlAttr('', '/xml/file/@attr', 'test', testOptions);
        assert.equal(result, true);
    });

    it('xml attribute not contains value', () => {
        const result = gverify.xmlAttr('', '/xml/file/@attr', 'fail', testOptions);
        assert.equal(result, false);
    });
});