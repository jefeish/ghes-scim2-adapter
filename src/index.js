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
import {ApiClient} from './ApiClient';
import {Scimv2BulkApi} from './api/Scimv2BulkApi';
import {Scimv2GroupsApi} from './api/Scimv2GroupsApi';
import {Scimv2MeApi} from './api/Scimv2MeApi';
import {Scimv2ResourceTypeApi} from './api/Scimv2ResourceTypeApi';
import {Scimv2ServiceProviderConfigApi} from './api/Scimv2ServiceProviderConfigApi';
import {Scimv2UsersApi} from './api/Scimv2UsersApi';

/**
* SCIM_2_0_APIs_Documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Scim20ApIsDocumentation = require('index'); // See note below*.
* var xxxSvc = new Scim20ApIsDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Scim20ApIsDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Scim20ApIsDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Scim20ApIsDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
    * The Scimv2BulkApi service constructor.
    * @property {module:api/Scimv2BulkApi}
    */
    Scimv2BulkApi,

    /**
    * The Scimv2GroupsApi service constructor.
    * @property {module:api/Scimv2GroupsApi}
    */
    Scimv2GroupsApi,

    /**
    * The Scimv2MeApi service constructor.
    * @property {module:api/Scimv2MeApi}
    */
    Scimv2MeApi,

    /**
    * The Scimv2ResourceTypeApi service constructor.
    * @property {module:api/Scimv2ResourceTypeApi}
    */
    Scimv2ResourceTypeApi,

    /**
    * The Scimv2ServiceProviderConfigApi service constructor.
    * @property {module:api/Scimv2ServiceProviderConfigApi}
    */
    Scimv2ServiceProviderConfigApi,

    /**
    * The Scimv2UsersApi service constructor.
    * @property {module:api/Scimv2UsersApi}
    */
    Scimv2UsersApi
};