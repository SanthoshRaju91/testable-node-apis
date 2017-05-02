import Book from './book.model';

export const createBook = async(req, res) => {
  const { title, author, year, pages } = req.body;
  const newBook = new Book({ title, author, year, pages });

  try {
    let book = await newBook.save();
    return res.status(200).json({ success: true, message: 'New book added', book: book});
  } catch(error) {
    return res.status(500).json({ success: false, message: 'Error'});
  }
};


export const getBooks = async(req, res) => {
  try {
    let books = await Book.find({});

    if(books.length) {
      return res.status(200).json({success: true, books})
    } else {
      return res.status(200).json({ success: true, books: [], message: 'No books to retrieve'});
    }

  } catch(error) {
    return res.json({ success: false, message: 'Could not get books'})
  }
}
