# The dev challenge app

[The challenge](challenge-md) was proposed on May 1st 2020

## The application

The Application is created using ExpressJS with some helper packages

- `morgan` to output each call
- `helmet` to convert application headers to useful ones
- `eslint` to create a way to have consistent code across files

For authentication, it uses the `jsonwebtoken` package that allow us to create a JWToken

For verification, it has 2 ways, an automatic way, by using the `express-jwt` package, and a normal way by injecting a middleware into the route and manually verifying the token authenticity

- `GET /secret1` uses the manual middleware
- `GET /secret2` uses the automatic middleware provided by `express-jwt`

## HTTP files

By leverage the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for Visual Studio Code, there are two `.http` files that can serve as requests to each route

 - `object.http` contains GET and POST routes to read and write the object in the challenge
 - `server.http` contains routes requests
 - `products.http` contains routes to handle product CRUD operations

## Routes

Th existing API routes are

| Method | Path           | Protected | Description
| ------ | -------------- | :-------: | -----------------
| POST   | /login         |   | to retrieve a valid token (valid for 1 minute)
| GET    | /products      | ✓ | lists all products
| GET    | /object        | ✓ | get the saved object
| POST   | /object        | ✓ | saves the given object
| GET    | /products/:id  | ✓ | get product by ID
| DELETE | /products/:id  | ✓ | delete product by ID
| PUT    | /products/:id  | ✓ | updates product price by product ID
| POST   | /products      | ✓ | creates a new product
| GET    | /public        |   | public route visible without token
| GET    | /secret1       | ✓ | secret route by using manual middleware
| GET    | /secret2       | ✓ | secret route by using package middleware

## Notes

- It was not requested, by I would spend some time creating a very simple test suite to make sure, no matter what was changed, the application would still work correctly across time
- Products are hosted in `/server/data/products.json`
- 

## How to start

- `npm run dev` will launch nodemon package 
- `npm start` will run the server
