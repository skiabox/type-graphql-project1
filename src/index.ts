import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/BookResolver";

//The reflect-metadata package we imported at the top is a helper library that extends the functionality of TypeScript decorators
//This package is required to use TypeORM and TypeGraphQL

async function main() {
  //create a new connection to the datbabase using the TypeORM's createConnection function
  const connection = await createConnection();
  //generate our GraphQL schema with the buildSchema method by TypeGraphQL
  //This will take all our resolvers and generate an executable GraphQL schema we can use inside our Apollo Server.
  const schema = await buildSchema({
    resolvers: [BookResolver] //add all resolvers here
  });
  //use the schema in the Apollo Server
  const server = new ApolloServer({ schema });

  await server.listen(4000);
  console.log("Server has started!");
}

main();
