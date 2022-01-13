# Scim20ApIsDocumentation.Scimv2GroupsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](Scimv2GroupsApi.md#createGroup) | **POST** /scim/v2/Groups | Return the group which was created
[**deleteGroup**](Scimv2GroupsApi.md#deleteGroup) | **DELETE** /scim/v2/Groups/{id} | Delete the group with the given id
[**getGroup**](Scimv2GroupsApi.md#getGroup) | **GET** /scim/v2/Groups | Return groups according to the filter, sort and pagination parameters
[**getGroupById**](Scimv2GroupsApi.md#getGroupById) | **GET** /scim/v2/Groups/{id} | Return the group with the given id
[**getGroupsByPost**](Scimv2GroupsApi.md#getGroupsByPost) | **POST** /scim/v2/Groups/.search | Return groups according to the filter, sort and pagination parameters
[**updateGroup**](Scimv2GroupsApi.md#updateGroup) | **PUT** /scim/v2/Groups/{id} | Return the updated group

<a name="createGroup"></a>
# **createGroup**
> &#x27;String&#x27; createGroup(opts)

Return the group which was created

Returns HTTP 201 if the group is successfully created.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.createGroup(opts, (error, data, response) => {
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

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(id)

Delete the group with the given id

Returns HTTP 204 if the group is successfully deleted.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let id = "id_example"; // String | Unique id of the resource type.

apiInstance.deleteGroup(id, (error, data, response) => {
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

<a name="getGroup"></a>
# **getGroup**
> &#x27;String&#x27; getGroup(opts)

Return groups according to the filter, sort and pagination parameters

Returns HTTP 404 if the groups are not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let opts = { 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | SCIM defined excludedAttribute parameter.
  'filter': "filter_example", // String | Filter expression for filtering
  'startIndex': 56, // Number | The 1-based index of the first query result
  'count': 56, // Number | Specifies the desired maximum number of query results per page.
  'sortBy': "sortBy_example", // String | Specifies the attribute whose value SHALL be used to order the returned responses
  'sortOder': "sortOder_example" // String | The order in which the \"sortBy\" parameter is applied.
};
apiInstance.getGroup(opts, (error, data, response) => {
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

<a name="getGroupById"></a>
# **getGroupById**
> &#x27;String&#x27; getGroupById(id, opts)

Return the group with the given id

Returns HTTP 200 if the group is found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let id = "id_example"; // String | Unique id of the resource type.
let opts = { 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.getGroupById(id, opts, (error, data, response) => {
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

<a name="getGroupsByPost"></a>
# **getGroupsByPost**
> &#x27;String&#x27; getGroupsByPost(opts)

Return groups according to the filter, sort and pagination parameters

Returns HTTP 404 if the groups are not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let opts = { 
  'body': "body_example" // String | 
};
apiInstance.getGroupsByPost(opts, (error, data, response) => {
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

<a name="updateGroup"></a>
# **updateGroup**
> &#x27;String&#x27; updateGroup(id, opts)

Return the updated group

Returns HTTP 404 if the group is not found.

### Example
```javascript
import {Scim20ApIsDocumentation} from 'scim_20_ap_is_documentation';
let defaultClient = Scim20ApIsDocumentation.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Scim20ApIsDocumentation.Scimv2GroupsApi();
let id = "id_example"; // String | Unique id of the resource type.
let opts = { 
  'body': "body_example", // String | 
  'attributes': ["attributes_example"], // [String] | SCIM defined attributes parameter.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | SCIM defined excludedAttribute parameter.
};
apiInstance.updateGroup(id, opts, (error, data, response) => {
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

