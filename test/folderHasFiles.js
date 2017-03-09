var assert = require('assert');
var gverify = require('../index');

var testOptions = {
    fs: {
        statSync(path){
            return { isDirectory: false }
        },
        readdirSync(path){
            return [1];
        }
    }
};

describe('folderHasFiles', () => {
    
    it('folder does not exist', () => {
        testOptions.fs.statSync = (path) => { return { isDirectory: false }};
        const result = gverify.folderHasFiles('', testOptions);
        assert.equal(result, false);
    });

    it('folder exists, with files', () => {
        testOptions.fs.statSync = (path) => { return { isDirectory: true }};
        const result = gverify.folderHasFiles('', testOptions);
        assert.equal(result, true);
    });

    it('folder exists, without files', () => {
        testOptions.fs.statSync = (path) => { return { isDirectory: true }};
        testOptions.fs.readdirSync = (path) => { return [] };

        const result = gverify.folderHasFiles('', testOptions);
        assert.equal(result, false);
    });
});