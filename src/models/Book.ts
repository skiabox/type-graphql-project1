import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

import { ObjectType, Field, ID } from "type-graphql";

//A TypeORM model is essentially a plain TypeScript class that is decorated with Entity

//We can combine both TypeGraphQL and TypeORM decorators in a single TypeScript class
//In that way, we can have a class that represents both GraphQL object type, as well as the database model

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  author: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;
}
