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
import {ApiClient} from "../ApiClient";

/**
* Scimv2ServiceProviderConfig service.
* @module api/Scimv2ServiceProviderConfigApi
* @version 1.0.0
*/
export class Scimv2ServiceProviderConfigApi {

    /**
    * Constructs a new Scimv2ServiceProviderConfigApi. 
    * @alias module:api/Scimv2ServiceProviderConfigApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getServiceProviderConfig operation.
     * @callback moduleapi/Scimv2ServiceProviderConfigApi~getServiceProviderConfigCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the ServiceProviderConfig schema.
     * Returns HTTP 200 if the schema is found.
     * @param {module:api/Scimv2ServiceProviderConfigApi~getServiceProviderConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getServiceProviderConfig(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/scim+json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/scim/v2/ServiceProviderConfig', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}