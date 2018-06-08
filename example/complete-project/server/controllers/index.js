var util = require("util")
const bookService = require('./../services/book')

module.exports = async (ctx) => {

  let data = await bookService.query();
  let books = util.inspect(data.data.books, { depth: null })
  let d = JSON.stringify(books);
  let d2 = JSON.parse(d)
  books = d2
  console.log('data11',d2); 
  
  
  await ctx.render('index', {
    books
  })
}