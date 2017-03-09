var fs = require('fs')
    , assert = require('assert');

module.exports = function(folder, testOptions){
    if(!testOptions){
        assert.ok(folder, 'folder parameter required');
    }
    fs = fsProvider(testOptions);
    
    const fold = fs.statSync(folder);

    if(!fold.isDirectory){
        if(testOptions){
            return false;
        }
        else{
            assert.ok(false, 'Directory '+ folder +' does not exist');
        }
    }

    var fileCount = fs.readdirSync(folder).length > 0;

    if(testOptions){
        return fileCount;
    }
    else{
        assert.ok(fileCount, 'Directory '+ folder +' is empty');
    }
}

function fsProvider(testOptions){
    return testOptions ? testOptions.fs : fs;
}