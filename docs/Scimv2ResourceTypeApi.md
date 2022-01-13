# Scim20ApIsDocumentation.Scimv2ResourceTypeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResourceType**](Scimv2ResourceTypeApi.md#getResourceType) | **GET** /scim/v2/ResourceType | Return the ResourceType schema.

<a name="getResourceType"></a>
# **getResourceType**
> &#x27;String&#x27; getResourceType()

Return the ResourceType schema.

Returns HTTP 200 if the schema is found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2ResourceTypeApi();
apiInstance.getResourceType((error, data, response) => {
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

