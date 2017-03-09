var fs = require('fs')
    , assert = require('assert');

module.exports = function(folder, testOptions){
    if(!testOptions){
        assert.ok(folder, 'folder parameter required');
    }
    fs = fsProvider(testOptions);
    
    const fold = fs.statSync(folder);

    if(!fold.isDirectory){
        return false;
    }

    return fs.readdirSync(folder).length > 0;
}

function fsProvider(testOptions){
    return testOptions ? testOptions.fs : fs;
}