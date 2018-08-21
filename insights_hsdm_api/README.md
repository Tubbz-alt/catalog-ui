# insights_hsdm_api

InsightsHsdmApi - JavaScript client for insights_hsdm_api
This is a API to fetch and order catalog items from different cloud sources
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install insights_hsdm_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/insights_hsdm_api
then install it via:

```shell
    npm install YOUR_USERNAME/insights_hsdm_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var InsightsHsdmApi = require('insights_hsdm_api');

var defaultClient = InsightsHsdmApi.ApiClient.instance;

// Configure HTTP basic authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.username = 'YOUR USERNAME'
UserSecurity.password = 'YOUR PASSWORD'

var api = new InsightsHsdmApi.UsersApi()

var body = new InsightsHsdmApi.Provider(); // {Provider} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addProvider(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/mkanoor/InsightsCatalog/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InsightsHsdmApi.UsersApi* | [**addProvider**](docs/UsersApi.md#addProvider) | **POST** /providers | Temporary API to add a new provider
*InsightsHsdmApi.UsersApi* | [**addToOrder**](docs/UsersApi.md#addToOrder) | **POST** /orders/{order_id}/items | Add a Catalog to the Order in Pending State
*InsightsHsdmApi.UsersApi* | [**catalogItems**](docs/UsersApi.md#catalogItems) | **GET** /catalog_items | fetches catalog items from all providers
*InsightsHsdmApi.UsersApi* | [**catalogParameters**](docs/UsersApi.md#catalogParameters) | **GET** /providers/{provider_id}/catalog_items/{catalog_id}/parameters | Fetches catalog parameters, it needs the provider id, the catalog_id
*InsightsHsdmApi.UsersApi* | [**fetchCatalogItemWithProvider**](docs/UsersApi.md#fetchCatalogItemWithProvider) | **GET** /providers/{provider_id}/catalog_items | Fetch all or a specific catalog item from a specific provider
*InsightsHsdmApi.UsersApi* | [**fetchCatalogItemWithProviderAndCatalogID**](docs/UsersApi.md#fetchCatalogItemWithProviderAndCatalogID) | **GET** /providers/{provider_id}/catalog_items/{catalog_id} | Fetches a specific catalog item for a provider
*InsightsHsdmApi.UsersApi* | [**listOrderItem**](docs/UsersApi.md#listOrderItem) | **GET** /orders/{order_id}/items/{order_item_id} | Get an individual item from a given order
*InsightsHsdmApi.UsersApi* | [**listOrderItems**](docs/UsersApi.md#listOrderItems) | **GET** /orders/{order_id}/items | Get a list of items in a given order
*InsightsHsdmApi.UsersApi* | [**listOrders**](docs/UsersApi.md#listOrders) | **GET** /orders | Get a list of orders
*InsightsHsdmApi.UsersApi* | [**listProgressMessages**](docs/UsersApi.md#listProgressMessages) | **GET** /order_items/{order_item_id}/progress_messages | Get a list of progress messages in an item
*InsightsHsdmApi.UsersApi* | [**listProviders**](docs/UsersApi.md#listProviders) | **GET** /providers | Temporary API to list provider
*InsightsHsdmApi.UsersApi* | [**newOrder**](docs/UsersApi.md#newOrder) | **POST** /orders | Create a new order
*InsightsHsdmApi.UsersApi* | [**submitOrder**](docs/UsersApi.md#submitOrder) | **POST** /orders/{order_id} | Submit the given order


## Documentation for Models

 - [InsightsHsdmApi.CatalogItem](docs/CatalogItem.md)
 - [InsightsHsdmApi.CatalogParameter](docs/CatalogParameter.md)
 - [InsightsHsdmApi.Order](docs/Order.md)
 - [InsightsHsdmApi.OrderItem](docs/OrderItem.md)
 - [InsightsHsdmApi.ParameterValue](docs/ParameterValue.md)
 - [InsightsHsdmApi.ProgressMessage](docs/ProgressMessage.md)
 - [InsightsHsdmApi.Provider](docs/Provider.md)


## Documentation for Authorization


### UserSecurity

- **Type**: HTTP basic authentication
