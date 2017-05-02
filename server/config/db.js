import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://root:root@ds127958.mlab.com:27958/frontendstack');

  mongoose.connection
    .once('open', () => console.log('MongoDB running'))
    .on('error', err => console.error(`MongoDB error: ${err}`))
};
