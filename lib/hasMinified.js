var gl = require('glob')
    , suff = require('suffix')
    , fs = require('fs')
    , assert = require('assert');

module.exports = function(glob, suffix, testOptions){
    if(!testOptions){
        assert.ok(glob, 'glob parameter required');
    }
    assert.ok(suffix, 'suffix parameter required');

    var missing = [];
    const matches = globProvider(testOptions, glob);

    matches.forEach(m => {
        const minName = suff(m, suffix)
        
        if(!fsProvider(testOptions).exists(minName)){
            missing.push(m);
        }
    });

    return missing.length == 0;
}

function fsProvider(testOptions){
    if(testOptions && testOptions.fs){
        return testOptions.fs;
    }
    else{
        fs;
    }
}

function globProvider(testOptions, glob){
    if(testOptions && testOptions.matches){
        return testOptions.matches;
    }
    else{
        return globProvider.sync(glob);
    }
}