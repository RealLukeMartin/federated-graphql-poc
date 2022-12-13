# Sales Platform GraphQL API

# Prerequisites

* **Node Version**: 16.x
* **NPM Version**: 8.x
* **Git**: 2.x
* **Mongo**: 5.x

### NVM Usage
For the easiest and most pain-free way to manage node versions we use node version manager (nvm).

To install nvm review this [link](https://github.com/nvm-sh/nvm#install--update-script)

To install the node version for this project run `nvm install 16`

After installing, you can switch to that node version with `nvm use 16`

## MongoDB
To develop on this project, mongoDB will need to be installed locally.

If mongoDB is not installed locally, you can install it following this method for mac:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

Once Mongo is installed you will want to have it running in the background.
You can run `brew services start mongodb-community@5.0` to start that process up.

### MongoDB Compass
For accessing and managing our mongo data we use MongoDB Compass which provides a
GUI to perform those tasks.

To install MongoDB Compass go to this [link](https://www.mongodb.com/products/compass)

## Environment Variables
To see the list of environment variables needed for this project check out the env.example
file in the root of this project.

Ask another developer to send you the actual values to use for development.


# Setup
The first step for the set up is to git clone this project down to your local computer.

After that you will want to get the .env file from another developer and put that into
the root of the project.

## Install

To install the dependencies of the project run:
```bash
npm install
```

## Seed Database
To get the starter user data run:

```bash
npm run seed -- --all
```

## Generate GraphQL Types
To generate the types for Typescript to pick up for the GraphQL schemas run:

```bash
npm run generate
```

# Development

While you develop you can have the server running locally and will automatically pick up
new changes while it is running. To do this run:


```bash
npm run dev
```

## Tests
To run the tests you build for the new development work being done run:

```bash
npm run test
```

To get a code coverage report for all of the tests in the project run:

```bash
npm run test:coverage
```

To run just a single test suite you can run:

```bash
npm run test (path/to/your/test/file/here)
```

## Linters and Formatters

To run linting that checks against the style guide rules of the codebase run:
```bash
npm run lint
```

To attempt to automatically fix any linting issues you can run:
```bash
npm run lint:fix
```

# Build
To just compile the typescript to javascript you can run:
```bash
npm run build
```

The compiled javascript will not have the *.gql files that are used for the graphql schema
we will need to run this command to get a full build that can be run:

```bash
npm run build:all
```

## Start the Server from the Build
To run the server from the built codebase you can run:

```bash
npm run start
```



