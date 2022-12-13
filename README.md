# Federated GraphQL API POC

Start it up: `docker-compose up -d`

Proceed to http://localhost:4000/graphql in your browser

Try out a query:

```gql
query {
  getUser { # This comes from subgraph-one
    _id
    email
  }
  getProgram { # This comes from subgraph-two
    _id
    type
    name
  }
}
```

Spin it down: `docker-compose down`