# Scim20ApIsDocumentation.Scimv2UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](Scimv2UsersApi.md#createUser) | **POST** /scim/v2/Users | Return the user which was created
[**deleteUser**](Scimv2UsersApi.md#deleteUser) | **DELETE** /scim/v2/Users/{id} | Delete the user with the given id
[**getUser**](Scimv2UsersApi.md#getUser) | **GET** /scim/v2/Users | Return users according to the filter, sort and pagination parameters
[**getUserById**](Scimv2UsersApi.md#getUserById) | **GET** /scim/v2/Users/{id} | Return the user with the given id
[**getUsersByPost**](Scimv2UsersApi.md#getUsersByPost) | **POST** /scim/v2/Users/.search | Return users according to the filter, sort and pagination parameters
[**updateUser**](Scimv2UsersApi.md#updateUser) | **PUT** /scim/v2/Users/{id} | Return the updated user

<a name="createUser"></a>
# **createUser**
> &#x27;String&#x27; createUser(opts)

Return the user which was created

Returns HTTP 201 if the user is successfully created.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.createUser(opts, (error, data, response) => {
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

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(id)

Delete the user with the given id

Returns HTTP 204 if the user is successfully deleted.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let id = "id_example"; // String | Unique id of the resource type.

apiInstance.deleteUser(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique id of the resource type. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUser"></a>
# **getUser**
> &#x27;String&#x27; getUser(opts)

Return users according to the filter, sort and pagination parameters

Returns HTTP 404 if the users are not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let opts = { 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | SCIM defined excludedAttribute parameter.
  'filter': "filter_example", // String | Filter expression for filtering
  'startIndex': 56, // Number | The 1-based index of the first query result
  'count': 56, // Number | Specifies the desired maximum number of query results per page.
  'sortBy': "sortBy_example", // String | Specifies the attribute whose value SHALL be used to order the returned responses
  'sortOder': "sortOder_example" // String | The order in which the \"sortBy\" parameter is applied.
};
apiInstance.getUser(opts, (error, data, response) => {
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
 **filter** | **String**| Filter expression for filtering | [optional] 
 **startIndex** | **Number**| The 1-based index of the first query result | [optional] 
 **count** | **Number**| Specifies the desired maximum number of query results per page. | [optional] 
 **sortBy** | **String**| Specifies the attribute whose value SHALL be used to order the returned responses | [optional] 
 **sortOder** | **String**| The order in which the \&quot;sortBy\&quot; parameter is applied. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/scim+json

<a name="getUserById"></a>
# **getUserById**
> &#x27;String&#x27; getUserById(id, opts)

Return the user with the given id

Returns HTTP 200 if the user is found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let id = "id_example"; // String | Unique id of the resource type.
let opts = { 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.getUserById(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique id of the resource type. | 
 **attributes** | [**[String]**](String.md)| SCIM defined attributes parameter. | [optional] 
 **excludedAttributes** | [**[String]**](String.md)| SCIM defined excludedAttribute parameter. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/scim+json

<a name="getUsersByPost"></a>
# **getUsersByPost**
> &#x27;String&#x27; getUsersByPost(opts)

Return users according to the filter, sort and pagination parameters

Returns HTTP 404 if the users are not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let opts = { 
  'body': "body_example" // String | 
};
apiInstance.getUsersByPost(opts, (error, data, response) => {
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

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/scim+json
 - **Accept**: application/json, application/scim+json

<a name="updateUser"></a>
# **updateUser**
> &#x27;String&#x27; updateUser(id, opts)

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

let apiInstance = new Scim20ApIsDocumentation.Scimv2UsersApi();
let id = "id_example"; // String | Unique id of the resource type.
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.updateUser(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique id of the resource type. | 
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

