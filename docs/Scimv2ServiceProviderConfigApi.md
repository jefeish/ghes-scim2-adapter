# Scim20ApIsDocumentation.Scimv2ServiceProviderConfigApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceProviderConfig**](Scimv2ServiceProviderConfigApi.md#getServiceProviderConfig) | **GET** /scim/v2/ServiceProviderConfig | Return the ServiceProviderConfig schema.

<a name="getServiceProviderConfig"></a>
# **getServiceProviderConfig**
> &#x27;String&#x27; getServiceProviderConfig()

Return the ServiceProviderConfig schema.

Returns HTTP 200 if the schema is found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2ServiceProviderConfigApi();
apiInstance.getServiceProviderConfig((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/scim+json

