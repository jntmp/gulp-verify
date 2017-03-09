var assert = require('assert');
var gverify = require('../index');

describe('hasMinified', () => {
        
    it('should have a matched minify', () => {
        const testOptions = {
            matches: ['./files/test.js'],
            fs: {
                exists(file){
                    return true;
                }
            }
        };

        const result = gverify.hasMinified('', '.min', testOptions);

        assert.equal(result, true);
    });

    it('should not have a matched minify', function(){
        const testOptions = {
            matches: ['./files/test.js'],
            fs: {
                exists(file){
                    return false;
                }
            }
        };

        const result = gverify.hasMinified('', '.min', testOptions);

        assert.equal(result, false);
    });

});

