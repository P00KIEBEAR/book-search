const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-error')



const resolvers = {
  Query: {
    me: () => User.findById().select("-password"),
  },


  Mutation: {
    addBook: async (parent, args) => {
      const book = await Book.create(args);
      return book;
    }
  }
};

module.exports = resolvers;
