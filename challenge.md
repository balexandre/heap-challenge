# The dev challenge

 Your task is to build a simple stateless service in Nodejs, with three major functionalities

 - Authentication
 - Store an object
 - Query and return an object

We have no requirements for which frameworks/libraries to use, choose whichever seems best suited for the task!

## Public Endpoints

 - Login Request body should contain an arbitrary username/password pair.
 - Treat it as a mock authentication service and accept any username/password.
 - Return a signed Json Web Token, which can be used to validate future requests.

## Protected Endpoints

 - The following two endpoints should be protected.
 - The JWT obtained in the “Login” endpoint must be attached to each request.
 - If the JWT is missing or invalid, these endpoints should reject the request.

## Create an endpoint that can store the object below:

```javascript
{
  "id": "779b8611f717494cb230abac00a8f40a",
  "name": "Heap",
  "birth": "2020-01-01T10:10:10Z",
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 200
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 400
    }
  ]
}
```

 - Create an endpoint that can query and return the stored object
