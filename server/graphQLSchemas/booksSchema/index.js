// import {
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLBoolean
// } from 'graphql/type';
//
// import Book from '../../modules/books/book.model';
//
//
// /**
//  * generate projection object for mongoose
//  * @param  {Object} fieldASTs
//  * @return {Project}
//  */
// export function getProjection (fieldASTs) {
//   return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
//     projections[selection.name.value] = true;
//     return projections;
//   }, {});
// }
//
// let BookType = new GraphQLObjectType({
//   name: 'book',
//   description: 'Book item',
//   fields: () => ({
//     title: {
//       type: (GraphQLString),
//       description: 'Book title'
//     },
//     author: {
//       type: (GraphQLString),
//       description: 'Book author'
//     },
//     year: {
//       type: (GraphQLInt),
//       description: 'Year in which the book was published'
//     },
//     pages: {
//       type: (GraphQLInt),
//       description: 'No. of pages in the book'
//     }
//   })
// });
//
// let schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'BookQueryType',
//     fields: {
//       book: {
//         type: new GraphQLList(BookType),
//         args: {
//           title: {
//             name: 'title',
//             type: new GraphQLNonNull(GraphQLString)
//           }
//         },
//         resolve: (root, { title }, source, fieldASTs) => {
//           let projections = getProjection(fieldASTs);
//
//           let books = new Promise((resolve, reject) => {
//             Book.find({ title }, projections, (err, books) => {
//               return err ? reject(err) : resolve(books);
//             });
//           })
//         }
//       }
//     }
//   })
// });
//
// export default schema;


import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Book {
    title: String
    author: String
    year: Int
    pages: Int
  }

  type Query {
    book(title: String, author: String, year: Int, pages: Int): Book
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
