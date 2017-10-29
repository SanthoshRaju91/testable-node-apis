const resolvers = {
  Query: {
    book(root, args) {
      return { title: 'The Book Thief', author: 'Markus Zusak', year: 2006, pages: 300}
    }
  }
}

export default resolvers;
