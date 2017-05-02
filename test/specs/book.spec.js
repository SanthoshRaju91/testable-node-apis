/*
* Testing spec for books module, this includes testing the API's for book module.
*/


import mongoose from 'mongoose';
import Book from '../../server/modules/books/book.model';

import chai from 'chai';
import chaiHTTP from 'chai-http';
import server from '../../server';

let should = chai.should();
chai.use(chaiHTTP);

describe('Books', () => {
    beforeEach((done) => {
        Book.collection.drop(err => {
            if (err) {
                console.error(`Error: ${err}`);
            } else {
                console.log('done');
                done();
            }
        });
    })
});

describe('/GET book', () => {
    it('It should GET all books', (done) => {
        chai.request(server)
            .get('/api/get/books')
            .end((err, res) => {
                if (err) {
                    console.error(`Error: ${err}`);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('books');
                }
                done();
            });
    });
});

describe('/POST book', () => {
    it('it should not post without all the required fields', (done) => {
        let book = {
            title: 'Test title',
            author: 'Test',
            year: 1985
        };
        chai.request(server)
            .post('/api/new/book')
            .send(book)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(false);
                done();
            });
    });
});

describe('/POST book', () => {
    it('it should post and create book with all the required fields', (done) => {
        let book = {
            title: 'Test title',
            author: 'Test',
            year: 1985,
            pages: 20
        };
        chai.request(server)
            .post('/api/new/book')
            .send(book)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
                done();
            });
    });
});
