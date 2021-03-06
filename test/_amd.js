/*!
 * test/_amd.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var $ = require('jquery');
var assert = require('proclaim');
var Endpoints = require('endpoints/endpoints');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('amd - endpoints.js', function () {

  it('Should create a new instance.', function () {
    var endpoints = new Endpoints($.ajax, {});
    assert.isInstanceOf(endpoints, Endpoints);
  });

});


});