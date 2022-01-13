# Scim20ApIsDocumentation.Scimv2MeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMe**](Scimv2MeApi.md#createMe) | **POST** /scim/v2/Me | Return the user which was anonymously created
[**deleteMe**](Scimv2MeApi.md#deleteMe) | **DELETE** /scim/v2/Me | Delete the authenticated user.
[**getMe**](Scimv2MeApi.md#getMe) | **GET** /scim/v2/Me | Return the authenticated user.
[**updateMe**](Scimv2MeApi.md#updateMe) | **PUT** /scim/v2/Me | Return the updated user

<a name="createMe"></a>
# **createMe**
> &#x27;String&#x27; createMe(opts)

Return the user which was anonymously created

Returns HTTP 201 if the user is successfully created.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2MeApi();
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.createMe(opts, (error, data, response) => {
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

<a name="deleteMe"></a>
# **deleteMe**
> deleteMe()

Delete the authenticated user.

Returns HTTP 204 if the user is successfully deleted.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2MeApi();
apiInstance.deleteMe((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMe"></a>
# **getMe**
> &#x27;String&#x27; getMe(opts)

Return the authenticated user.

Returns HTTP 200 if the user is found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2MeApi();
let opts = { 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.getMe(opts, (error, data, response) => {
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
 **attributes** | [**[String]**](String.md)| SCIM defined attributes parameter. | [optional] 
 **excludedAttributes** | [**[String]**](String.md)| SCIM defined excludedAttribute parameter. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/scim+json

<a name="updateMe"></a>
# **updateMe**
> &#x27;String&#x27; updateMe(opts)

Return the updated user

Returns HTTP 404 if the user is not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2MeApi();
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.updateMe(opts, (error, data, response) => {
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

