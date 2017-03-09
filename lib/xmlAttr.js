var xp = require('xpath')
  , dom = require('xmldom').DOMParser
  , fs = require('fs')
  , assert = require('assert');

module.exports = function(file, xpath, contains, testOptions){
    if(!testOptions){
      assert.ok(file, "file parameter required");
    }
    assert.ok(xpath, "xpath parameter required");
    assert.ok(contains, "contains parameter required");
    
    const f = (testOptions ? testOptions.file : fs.readFileSync(file));
    var errors = [];
    var doc = new dom().parseFromString(f);

    xpath.forEach((x) => { 
      var value = xp.select1(x, doc).value;

      if(value.indexOf(contains) < 0){
        errors.push(value);
      }
    });

    if(testOptions){
      return errors.length == 0;
    }
    else{
      assert.ok(errors.length == 0, 'Values not found in XML attributes - ' + errors);
    }
}