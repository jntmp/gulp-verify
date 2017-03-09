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
    
    var xml = testOptions ? testOptions.file : fs.readFileSync(file);
    var doc = new dom().parseFromString(xml);
    
    var value = xp.select1(xpath, doc).value;

    return value.indexOf(contains) > -1;
}