import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://0.0.0.0:27017/frontendstack');

  mongoose.connection
    .once('open', () => console.log('MongoDB running'))
    .on('error', err => console.error(`MongoDB error: ${err}`))
};
