# Scim20ApIsDocumentation.Scimv2BulkApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulk**](Scimv2BulkApi.md#createBulk) | **POST** /scim/v2/Bulk | Return the bulk which was created.

<a name="createBulk"></a>
# **createBulk**
> &#x27;String&#x27; createBulk(opts)

Return the bulk which was created.

Returns HTTP 201 if the bulk is successfully created.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2BulkApi();
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.createBulk(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**String**](String.md)|  | [optional] 
 **attributes** | [**[String]**](String.md)| SCIM defined attributes parameter. | [optional] 
 **excludedAttributes** | [**[String]**](String.md)| SCIM defined excludedAttribute parameter. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/scim+json
 - **Accept**: application/json, application/scim+json

