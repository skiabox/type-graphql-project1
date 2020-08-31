import { InputType, Field } from "type-graphql";

//the only fields that are necessary for creating a book are title and author,
//because the id is auto-generated by the database and isPublished field has a default value

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}