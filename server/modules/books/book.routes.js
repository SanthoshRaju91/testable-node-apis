import { Router } from 'express';
import * as BookController from './book.controller';

const routes = new Router();

routes.post('/new/book', BookController.createBook);
routes.get('/get/books', BookController.getBooks);

export default routes;
