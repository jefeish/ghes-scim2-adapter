/*
 * SCIM 2.0 APIs Documentation
 * SCIM 2.0 APIs Documentation
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@wso2.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Scim20ApIsDocumentation);
  }
}(this, function(expect, Scim20ApIsDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Scim20ApIsDocumentation.Scimv2ServiceProviderConfigApi();
  });

  describe('(package)', function() {
    describe('Scimv2ServiceProviderConfigApi', function() {
      describe('getServiceProviderConfig', function() {
        it('should call getServiceProviderConfig successfully', function(done) {
          // TODO: uncomment getServiceProviderConfig call and complete the assertions
          /*

          instance.getServiceProviderConfig(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(&#x27;string&#x27;);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
