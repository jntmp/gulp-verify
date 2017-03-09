'use strict';
var Mocha = require('mocha');
var args = process.argv.splice(2);
var files;

var mocha = new Mocha({
  timeout: 60000,
  reporter: 'spec',
  globals: ['Associations', 'CREATE_TEST_WATERLINE', 'DELETE_TEST_WATERLINE']
});

args.forEach(mocha.addFile.bind(mocha));

mocha.run(function (failures) {
    process.exit(failures);
});